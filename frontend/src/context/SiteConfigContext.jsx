import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

const SiteConfigContext = createContext(null);

const mergeConfig = (baseValue, overrideValue) => {
  if (Array.isArray(baseValue) && Array.isArray(overrideValue)) {
    return overrideValue;
  }

  if (
    baseValue &&
    overrideValue &&
    typeof baseValue === "object" &&
    typeof overrideValue === "object" &&
    !Array.isArray(baseValue) &&
    !Array.isArray(overrideValue)
  ) {
    const result = { ...baseValue };

    for (const [key, value] of Object.entries(overrideValue)) {
      result[key] = key in baseValue ? mergeConfig(baseValue[key], value) : value;
    }

    return result;
  }

  return overrideValue ?? baseValue;
};

const apiBase = import.meta.env.VITE_API_URL || "/api";

export function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(defaultSiteConfig);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshConfig = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${apiBase}/config`);
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load site config");
      }

      setConfig(mergeConfig(defaultSiteConfig, data.config || {}));
    } catch (fetchError) {
      setConfig(defaultSiteConfig);
      setError(fetchError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refreshConfig();
  }, []);

  useEffect(() => {
    document.title = config.site?.title || defaultSiteConfig.site.title;
  }, [config]);

  const saveConfig = async (nextConfig, adminToken) => {
    const response = await fetch(`${apiBase}/config`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": adminToken,
      },
      body: JSON.stringify({ config: nextConfig }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to save site config");
    }

    setConfig(mergeConfig(defaultSiteConfig, data.config || {}));
    return data.config;
  };

  const value = useMemo(
    () => ({
      config,
      loading,
      error,
      refreshConfig,
      saveConfig,
    }),
    [config, loading, error]
  );

  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);

  if (!context) {
    throw new Error("useSiteConfig must be used inside SiteConfigProvider");
  }

  return context;
}