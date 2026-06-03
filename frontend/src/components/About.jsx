import React from "react";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

export default function About() {
  // Static content copied from defaultSiteConfig
  const about = defaultSiteConfig.about;

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div id="about" className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-green-700">About the Conference</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.conferenceHtml }} />
        </div>

        <div id="objectives" className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-green-700">Objectives of the Conference</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {(about.objectives?.length ? about.objectives : defaultSiteConfig.about.objectives).map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>

        <div id="who-can-attend" className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-green-100 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Who can attend?</h2>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">{about.whoCanAttendHtml}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
          <h2 className="text-4xl font-bold mb-6 text-green-700">About the Institute</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.instituteHtml }} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-green-700">About the Department</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.departmentHtml }} />
        </div>
      </div>
    </section>
  );
}