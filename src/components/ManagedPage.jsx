import React from "react";
import { useSiteConfig } from "../context/SiteConfigContext";

export default function ManagedPage({ pageKey, fallback: FallbackComponent }) {
  const { config } = useSiteConfig();
  const pageConfig = config.pages?.[pageKey];

  if (pageConfig?.html) {
    return (
      <section className="py-16 bg-gray-50 min-h-screen px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          {pageConfig.title ? (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{pageConfig.title}</h1>
          ) : null}
          {pageConfig.subtitle ? (
            <p className="text-lg text-gray-600 mb-8">{pageConfig.subtitle}</p>
          ) : null}
          <div
            className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: pageConfig.html }}
          />
        </div>
      </section>
    );
  }

  return <FallbackComponent />;
}