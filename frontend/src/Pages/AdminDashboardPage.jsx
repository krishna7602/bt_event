import React, { useMemo, useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";

const sectionTitles = {
  site: "Global Site Settings",
  hero: "Hero Section",
  about: "About Section",
  importantDates: "Important Dates",
  contact: "Contact Section",
  footer: "Footer Section",
  pages: "Page Overrides",
};

const editableKeys = ["site", "hero", "about", "importantDates", "contact", "footer", "pages"];

export default function AdminDashboardPage() {
  const { config, saveConfig, refreshConfig } = useSiteConfig();
  const [adminToken, setAdminToken] = useState("admin123");
  const [activeKey, setActiveKey] = useState("site");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [drafts, setDrafts] = useState(() => {
    const initial = {};
    for (const key of editableKeys) {
      initial[key] = JSON.stringify(config[key] ?? {}, null, 2);
    }
    return initial;
  });

  const parsedDraft = useMemo(() => {
    try {
      return JSON.parse(drafts[activeKey] || "{}");
    } catch {
      return null;
    }
  }, [activeKey, drafts]);

  const updateDraft = (key, value) => {
    setDrafts((current) => ({ ...current, [key]: value }));
  };

  const handleSave = async () => {
    setStatus("");
    setError("");

    let nextConfig;

    try {
      nextConfig = {
        ...config,
        [activeKey]: JSON.parse(drafts[activeKey] || "{}"),
      };
    } catch {
      setError("The selected section contains invalid JSON.");
      return;
    }

    try {
      await saveConfig(nextConfig, adminToken);
      await refreshConfig();
      setStatus("Configuration saved.");
    } catch (saveError) {
      setError(saveError.message);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Admin Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Control conference content from one place</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Edit the live site settings, hero copy, about section, contact details, and per-page HTML overrides.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <label className="block text-sm font-semibold text-slate-200">Admin token</label>
            <input
              value={adminToken}
              onChange={(event) => setAdminToken(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              placeholder="admin token"
            />

            <nav className="mt-6 space-y-2">
              {editableKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveKey(key)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${activeKey === key ? "bg-emerald-400 text-slate-950" : "bg-white/5 text-slate-200 hover:bg-white/10"}`}
                >
                  {sectionTitles[key]}
                </button>
              ))}
            </nav>
          </aside>

          <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl md:p-8">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">{sectionTitles[activeKey]}</h2>
                <p className="text-sm text-slate-500">Edit the JSON for this section and save it back to MongoDB.</p>
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Save changes
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">JSON editor</label>
                <textarea
                  value={drafts[activeKey]}
                  onChange={(event) => updateDraft(activeKey, event.target.value)}
                  className="min-h-[520px] w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 font-mono text-sm text-slate-800 outline-none focus:border-slate-950"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950 p-5 text-slate-100">
                  <h3 className="text-lg font-semibold">Live preview</h3>
                  <pre className="mt-4 max-h-[220px] overflow-auto whitespace-pre-wrap break-words rounded-2xl bg-black/30 p-4 text-xs text-slate-200">
                    {parsedDraft ? JSON.stringify(parsedDraft, null, 2) : "Invalid JSON"}
                  </pre>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-amber-50 p-5 text-amber-950">
                  <h3 className="text-lg font-semibold">Usage</h3>
                  <p className="mt-2 text-sm leading-6">
                    Keep the structure intact. For page overrides, add an object inside <strong>pages</strong> using the route slug as the key and provide an <strong>html</strong> field.
                  </p>
                </div>

                {status ? <div className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm text-emerald-900">{status}</div> : null}
                {error ? <div className="rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-900">{error}</div> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}