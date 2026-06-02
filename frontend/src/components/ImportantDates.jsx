import React from "react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

export default function ImportantDates() {
  const { config } = useSiteConfig();
  const dates = config.importantDates?.dates?.length ? config.importantDates.dates : defaultSiteConfig.importantDates.dates;
  const title = config.importantDates?.title || defaultSiteConfig.importantDates.title;

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-900 text-center">{title}</h2>

        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <th className="px-6 py-4 text-left text-lg font-semibold">Event</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, index) => (
                <tr
                  key={item.event}
                  className={`border-b border-gray-200 transition-colors ${item.highlight ? "bg-red-50 hover:bg-red-100" : index % 2 === 0 ? "bg-gray-50 hover:bg-blue-50" : "bg-white hover:bg-blue-50"}`}
                >
                  <td className={`px-6 py-4 font-semibold ${item.highlight ? "text-red-700" : "text-gray-800"}`}>{item.event}</td>
                  <td className={`px-6 py-4 font-medium whitespace-nowrap ${item.highlight ? "text-red-600 font-bold" : "text-blue-600"}`}>{item.date}</td>
                  <td className="px-6 py-4 text-gray-600">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4 mt-8">
          {dates.map((item) => (
            <div key={item.event} className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border ${item.highlight ? "bg-red-50 border-red-200" : "bg-white border-gray-200"}`}>
              <h3 className={`font-bold text-lg mb-2 ${item.highlight ? "text-red-700" : "text-gray-800"}`}>{item.event}</h3>
              <p className={`font-semibold mb-3 ${item.highlight ? "text-red-600" : "text-blue-600"}`}>{item.date}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}