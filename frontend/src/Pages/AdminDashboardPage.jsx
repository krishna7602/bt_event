import React, { useEffect, useMemo, useState } from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

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

const clone = (value) => JSON.parse(JSON.stringify(value));

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

const emptyDate = () => ({ event: "", date: "", description: "", highlight: false });
const emptyImage = () => ({ url: "", caption: "" });
const emptySponsor = () => ({ name: "", imageUrl: "" });
const emptyCredit = () => ({ name: "", url: "" });
const emptyPage = () => ({ slug: "", html: "" });

const toPageEntries = (pages) =>
  Object.entries(pages || {}).map(([slug, page]) => ({
    slug,
    html: page?.html || "",
  }));

const toPagesObject = (entries) =>
  entries.reduce((accumulator, entry) => {
    if (!entry.slug.trim()) {
      return accumulator;
    }

    accumulator[entry.slug.trim()] = { html: entry.html || "" };
    return accumulator;
  }, {});

function Input({ label, value, onChange, placeholder = "" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-950"
      />
    </label>
  );
}

function TextArea({ label, value, onChange, placeholder = "", rows = 5 }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-950"
      />
    </label>
  );
}

function SectionCard({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-950">{title}</h3>
        {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function AdminDashboardPage() {
  const { config, saveConfig, refreshConfig } = useSiteConfig();
  const [adminToken, setAdminToken] = useState("admin123");
  const [activeKey, setActiveKey] = useState("site");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [draftConfig, setDraftConfig] = useState(() => clone(mergeConfig(defaultSiteConfig, config)));

  useEffect(() => {
    setDraftConfig(clone(mergeConfig(defaultSiteConfig, config)));
  }, [config]);

  const updateSection = (section, field, value) => {
    setDraftConfig((current) => ({
      ...current,
      [section]: {
        ...(current[section] || {}),
        [field]: value,
      },
    }));
  };

  const updateListItem = (section, field, index, value) => {
    setDraftConfig((current) => {
      const nextItems = [...(current[section]?.[field] || [])];
      nextItems[index] = value;

      return {
        ...current,
        [section]: {
          ...(current[section] || {}),
          [field]: nextItems,
        },
      };
    });
  };

  const addListItem = (section, field, createItem) => {
    setDraftConfig((current) => ({
      ...current,
      [section]: {
        ...(current[section] || {}),
        [field]: [...(current[section]?.[field] || []), createItem()],
      },
    }));
  };

  const removeListItem = (section, field, index) => {
    setDraftConfig((current) => ({
      ...current,
      [section]: {
        ...(current[section] || {}),
        [field]: (current[section]?.[field] || []).filter((_, itemIndex) => itemIndex !== index),
      },
    }));
  };

  const pageEntries = useMemo(() => toPageEntries(draftConfig.pages), [draftConfig.pages]);

  const updatePageEntry = (index, field, value) => {
    const nextEntries = pageEntries.map((entry, entryIndex) =>
      entryIndex === index ? { ...entry, [field]: value } : entry
    );

    setDraftConfig((current) => ({
      ...current,
      pages: toPagesObject(nextEntries),
    }));
  };

  const handleSave = async () => {
    setStatus("");
    setError("");

    try {
      await saveConfig(draftConfig, adminToken);
      await refreshConfig();
      setStatus("Configuration saved.");
    } catch (saveError) {
      setError(saveError.message);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white md:px-8 lg:px-12 xl:px-16">
      <div className="flex w-full flex-col gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Admin Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Control conference content from one place</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Edit the live site settings with normal form fields — no JSON editing needed.
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
                <p className="text-sm text-slate-500">Update the content using simple inputs, text areas, and add/remove rows.</p>
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Save changes
              </button>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
              <div className="space-y-6">
                {activeKey === "site" ? (
                  <SectionCard title="Global Site Settings" description="Basic site identity and brochure link.">
                    <Input label="Site title" value={draftConfig.site?.title || ""} onChange={(value) => updateSection("site", "title", value)} />
                    <Input label="Site description" value={draftConfig.site?.description || ""} onChange={(value) => updateSection("site", "description", value)} />
                    <Input label="Logo text" value={draftConfig.site?.logoText || ""} onChange={(value) => updateSection("site", "logoText", value)} />
                    <Input label="Brochure URL" value={draftConfig.site?.brochureUrl || ""} onChange={(value) => updateSection("site", "brochureUrl", value)} />
                  </SectionCard>
                ) : null}

                {activeKey === "hero" ? (
                  <SectionCard title="Hero Section" description="Top banner content shown on the homepage.">
                    <Input label="Title prefix" value={draftConfig.hero?.titlePrefix || ""} onChange={(value) => updateSection("hero", "titlePrefix", value)} />
                    <Input label="Title highlight" value={draftConfig.hero?.titleHighlight || ""} onChange={(value) => updateSection("hero", "titleHighlight", value)} />
                    <Input label="Badge" value={draftConfig.hero?.badge || ""} onChange={(value) => updateSection("hero", "badge", value)} />
                    <TextArea label="Description" value={draftConfig.hero?.description || ""} onChange={(value) => updateSection("hero", "description", value)} rows={4} />
                    <Input label="Date label" value={draftConfig.hero?.dateLabel || ""} onChange={(value) => updateSection("hero", "dateLabel", value)} />
                    <Input label="Date value" value={draftConfig.hero?.dateValue || ""} onChange={(value) => updateSection("hero", "dateValue", value)} />
                    <Input label="Notice" value={draftConfig.hero?.notice || ""} onChange={(value) => updateSection("hero", "notice", value)} />
                    <TextArea label="Tagline" value={draftConfig.hero?.tagline || ""} onChange={(value) => updateSection("hero", "tagline", value)} rows={4} />
                    <Input label="Brochure URL" value={draftConfig.hero?.brochureUrl || ""} onChange={(value) => updateSection("hero", "brochureUrl", value)} />

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Carousel images</h4>
                        <button type="button" onClick={() => addListItem("hero", "carouselImages", emptyImage)} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add image
                        </button>
                      </div>
                      <div className="space-y-4">
                        {(draftConfig.hero?.carouselImages || []).map((image, index) => (
                          <div key={`${image.caption || "image"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <Input
                                label="Image URL"
                                value={image.url || ""}
                                onChange={(value) => updateListItem("hero", "carouselImages", index, { ...image, url: value })}
                              />
                              <Input
                                label="Caption"
                                value={image.caption || ""}
                                onChange={(value) => updateListItem("hero", "carouselImages", index, { ...image, caption: value })}
                              />
                            </div>
                            <div className="mt-3 text-right">
                              <button type="button" onClick={() => removeListItem("hero", "carouselImages", index)} className="text-sm font-semibold text-red-600 hover:text-red-700">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Sponsors</h4>
                        <button type="button" onClick={() => addListItem("hero", "sponsors", emptySponsor)} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add sponsor
                        </button>
                      </div>
                      <div className="space-y-4">
                        {(draftConfig.hero?.sponsors || []).map((sponsor, index) => (
                          <div key={`${sponsor.name || "sponsor"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <Input
                                label="Sponsor name"
                                value={sponsor.name || ""}
                                onChange={(value) => updateListItem("hero", "sponsors", index, { ...sponsor, name: value })}
                              />
                              <Input
                                label="Image URL"
                                value={sponsor.imageUrl || ""}
                                onChange={(value) => updateListItem("hero", "sponsors", index, { ...sponsor, imageUrl: value })}
                              />
                            </div>
                            <div className="mt-3 text-right">
                              <button type="button" onClick={() => removeListItem("hero", "sponsors", index)} className="text-sm font-semibold text-red-600 hover:text-red-700">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ) : null}

                {activeKey === "about" ? (
                  <SectionCard title="About Section" description="Conference, institute, and department text.">
                    <TextArea label="Conference HTML" value={draftConfig.about?.conferenceHtml || ""} onChange={(value) => updateSection("about", "conferenceHtml", value)} rows={7} />
                    <TextArea label="Who can attend" value={draftConfig.about?.whoCanAttendHtml || ""} onChange={(value) => updateSection("about", "whoCanAttendHtml", value)} rows={4} />
                    <TextArea label="Institute HTML" value={draftConfig.about?.instituteHtml || ""} onChange={(value) => updateSection("about", "instituteHtml", value)} rows={7} />
                    <TextArea label="Department HTML" value={draftConfig.about?.departmentHtml || ""} onChange={(value) => updateSection("about", "departmentHtml", value)} rows={7} />

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Objectives</h4>
                        <button type="button" onClick={() => addListItem("about", "objectives", () => "")} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add objective
                        </button>
                      </div>
                      <div className="space-y-3">
                        {(draftConfig.about?.objectives || []).map((objective, index) => (
                          <div key={`${objective || "objective"}-${index}`} className="flex gap-3">
                            <input
                              value={objective}
                              onChange={(event) => updateListItem("about", "objectives", index, event.target.value)}
                              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-950"
                              placeholder={`Objective ${index + 1}`}
                            />
                            <button type="button" onClick={() => removeListItem("about", "objectives", index)} className="rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50">
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ) : null}

                {activeKey === "importantDates" ? (
                  <SectionCard title="Important Dates" description="Add conference deadlines and event milestones.">
                    <Input label="Section title" value={draftConfig.importantDates?.title || ""} onChange={(value) => updateSection("importantDates", "title", value)} />

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Dates</h4>
                        <button type="button" onClick={() => addListItem("importantDates", "dates", emptyDate)} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add date
                        </button>
                      </div>
                      <div className="space-y-4">
                        {(draftConfig.importantDates?.dates || []).map((dateItem, index) => (
                          <div key={`${dateItem.event || "date"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <Input label="Event" value={dateItem.event || ""} onChange={(value) => updateListItem("importantDates", "dates", index, { ...dateItem, event: value })} />
                              <Input label="Date" value={dateItem.date || ""} onChange={(value) => updateListItem("importantDates", "dates", index, { ...dateItem, date: value })} />
                            </div>
                            <TextArea label="Description" value={dateItem.description || ""} onChange={(value) => updateListItem("importantDates", "dates", index, { ...dateItem, description: value })} rows={3} />
                            <label className="mt-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                              <input
                                type="checkbox"
                                checked={Boolean(dateItem.highlight)}
                                onChange={(event) => updateListItem("importantDates", "dates", index, { ...dateItem, highlight: event.target.checked })}
                              />
                              Highlight this date
                            </label>
                            <div className="mt-3 text-right">
                              <button type="button" onClick={() => removeListItem("importantDates", "dates", index)} className="text-sm font-semibold text-red-600 hover:text-red-700">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ) : null}

                {activeKey === "contact" ? (
                  <SectionCard title="Contact Section" description="Contact heading, location, email, and phone number.">
                    <Input label="Heading" value={draftConfig.contact?.heading || ""} onChange={(value) => updateSection("contact", "heading", value)} />
                    <TextArea label="Description" value={draftConfig.contact?.description || ""} onChange={(value) => updateSection("contact", "description", value)} rows={4} />
                    <TextArea label="Location HTML" value={draftConfig.contact?.locationHtml || ""} onChange={(value) => updateSection("contact", "locationHtml", value)} rows={5} />
                    <Input label="Email" value={draftConfig.contact?.email || ""} onChange={(value) => updateSection("contact", "email", value)} />
                    <Input label="Call / phone" value={draftConfig.contact?.call || ""} onChange={(value) => updateSection("contact", "call", value)} />
                  </SectionCard>
                ) : null}

                {activeKey === "footer" ? (
                  <SectionCard title="Footer Section" description="Footer text and credits.">
                    <TextArea label="Conference name" value={draftConfig.footer?.conferenceName || ""} onChange={(value) => updateSection("footer", "conferenceName", value)} rows={2} />
                    <TextArea label="Institution line" value={draftConfig.footer?.institutionLine || ""} onChange={(value) => updateSection("footer", "institutionLine", value)} rows={3} />
                    <TextArea label="Copyright" value={draftConfig.footer?.copyright || ""} onChange={(value) => updateSection("footer", "copyright", value)} rows={2} />
                    <Input label="Host note" value={draftConfig.footer?.hostNote || ""} onChange={(value) => updateSection("footer", "hostNote", value)} />

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Developer credits</h4>
                        <button type="button" onClick={() => addListItem("footer", "developerCredits", emptyCredit)} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add credit
                        </button>
                      </div>
                      <div className="space-y-4">
                        {(draftConfig.footer?.developerCredits || []).map((credit, index) => (
                          <div key={`${credit.name || "credit"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <Input label="Name" value={credit.name || ""} onChange={(value) => updateListItem("footer", "developerCredits", index, { ...credit, name: value })} />
                              <Input label="URL" value={credit.url || ""} onChange={(value) => updateListItem("footer", "developerCredits", index, { ...credit, url: value })} />
                            </div>
                            <div className="mt-3 text-right">
                              <button type="button" onClick={() => removeListItem("footer", "developerCredits", index)} className="text-sm font-semibold text-red-600 hover:text-red-700">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ) : null}

                {activeKey === "pages" ? (
                  <SectionCard title="Page Overrides" description="Override route-specific HTML snippets for custom pages.">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900">Custom pages</h4>
                        <button type="button" onClick={() => setDraftConfig((current) => ({ ...current, pages: toPagesObject([...toPageEntries(current.pages), emptyPage()]) }))} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                          Add page
                        </button>
                      </div>
                      <div className="space-y-4">
                        {pageEntries.map((entry, index) => (
                          <div key={`${entry.slug || "page"}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div className="grid gap-3 md:grid-cols-2">
                              <Input label="Route slug" value={entry.slug} onChange={(value) => updatePageEntry(index, "slug", value)} placeholder="example-page" />
                              <div />
                            </div>
                            <TextArea label="HTML content" value={entry.html} onChange={(value) => updatePageEntry(index, "html", value)} rows={6} />
                            <div className="mt-3 text-right">
                              <button
                                type="button"
                                onClick={() => setDraftConfig((current) => ({ ...current, pages: toPagesObject(pageEntries.filter((_, itemIndex) => itemIndex !== index)) }))}
                                className="text-sm font-semibold text-red-600 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionCard>
                ) : null}
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-slate-950 p-5 text-slate-100">
                  <h3 className="text-lg font-semibold">Saved preview</h3>
                  <pre className="mt-4 max-h-[300px] overflow-auto whitespace-pre-wrap break-words rounded-2xl bg-black/30 p-4 text-xs text-slate-200">
                    {JSON.stringify(draftConfig[activeKey] || {}, null, 2)}
                  </pre>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-amber-50 p-5 text-amber-950">
                  <h3 className="text-lg font-semibold">Usage</h3>
                  <p className="mt-2 text-sm leading-6">
                    Fill the fields like a normal form. Add rows for dates, sponsors, images, and credits when needed.
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