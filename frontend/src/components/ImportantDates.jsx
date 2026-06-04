import React from "react";
import { defaultSiteConfig } from "../config/defaultSiteConfig";

export default function ImportantDates() {
  // Use static important-dates from defaultSiteConfig
  const dates = defaultSiteConfig.importantDates.dates;
  const title = defaultSiteConfig.importantDates.title;

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-slate-900 to-emerald-900 px-6 py-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">{title}</h2>
          </div>

          <div className="bg-white p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Event</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((item, index) => (
                    <tr
                      key={item.event}
                      className={`border-b border-gray-100 transition-colors ${item.highlight ? "bg-red-50 hover:bg-red-100" : index % 2 === 0 ? "bg-gray-50 hover:bg-slate-50" : "bg-white hover:bg-slate-50"}`}
                    >
                      <td className={`px-6 py-4 font-semibold ${item.highlight ? "text-red-700" : "text-gray-800"}`}>{item.event}</td>
                      <td className={`px-6 py-4 font-medium whitespace-nowrap ${item.highlight ? "text-red-600 font-bold" : "text-emerald-600"}`}>{item.date}</td>
                      <td className="px-6 py-4 text-gray-600">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-4 mt-8">
          {dates.map((item) => (
            <div key={item.event} className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border ${item.highlight ? "bg-red-50 border-red-200" : "bg-white border-gray-200"}`}>
              <h3 className={`font-bold text-lg mb-2 ${item.highlight ? "text-red-700" : "text-gray-800"}`}>{item.event}</h3>
              <p className={`font-semibold mb-3 ${item.highlight ? "text-red-600" : "text-emerald-600"}`}>{item.date}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}