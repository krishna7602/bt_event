import SiteConfig from "../models/SiteConfig.js";
import { defaultConfig } from "../config/defaultConfig.js";
import mongoose from "mongoose";

const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
let memoryConfig = JSON.parse(JSON.stringify(defaultConfig));

const hasDatabaseConnection = () => mongoose.connection.readyState === 1;

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

const getConfigDocument = async () => {
  if (!hasDatabaseConnection()) {
    return null;
  }

  let configDocument = await SiteConfig.findOne({ key: "site-config" });

  if (!configDocument) {
    configDocument = await SiteConfig.create({
      key: "site-config",
      settings: defaultConfig,
    });
  }

  return configDocument;
};

export const getConfig = async (_request, response, next) => {
  try {
    if (!hasDatabaseConnection()) {
      response.json({ success: true, config: memoryConfig });
      return;
    }

    const configDocument = await getConfigDocument();
    response.json({ success: true, config: configDocument.settings });
  } catch (error) {
    next(error);
  }
};

export const updateConfig = async (request, response, next) => {
  try {
    const token = request.header("x-admin-token") || request.body.adminToken;

    if (token !== adminPassword) {
      return response.status(401).json({ success: false, message: "Invalid admin token" });
    }

    const incomingConfig = request.body.config ?? request.body;
    const { adminToken, config, ...payload } = incomingConfig;
    const updates = Object.keys(payload).length > 0 ? payload : config ?? {};

    if (!hasDatabaseConnection()) {
      memoryConfig = mergeConfig(memoryConfig, updates);
      response.json({ success: true, config: memoryConfig });
      return;
    }

    const configDocument = await getConfigDocument();
    configDocument.settings = mergeConfig(configDocument.settings, updates);
    await configDocument.save();

    response.json({ success: true, config: configDocument.settings });
  } catch (error) {
    next(error);
  }
};