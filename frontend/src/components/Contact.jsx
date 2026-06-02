import React from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

export default function Contact() {
  const { config } = useSiteConfig();
  const contact = config.contact || defaultSiteConfig.contact;

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{contact.heading}</h2>
        <p className="text-gray-700 mb-8 max-w-4xl">{contact.description}</p>

        <div className="bg-white border rounded-lg p-6 shadow-sm w-full lg:w-2/3">
          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: contact.locationHtml }} />
          </div>

          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-700">
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                {contact.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Call</h3>
            <p className="text-gray-700">{contact.call}</p>
          </div>
        </div>
      </div>
    </section>
  );
}