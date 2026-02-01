import React from "react";

export default function ImportantDates() {
  const dates = [
    {
      event: "Paper Submission Start Date",
      date: "February 8, 2026",
      description: "Start date to submit research papers for review."
    },
    {
      event: "Paper Submission Deadline",
      date: "March 31, 2026",
      description: "Final date to submit research papers for review."
    },
    {
      event: "Notification of Acceptance",
      date: "April 20, 2026",
      description: "Authors will receive acceptance or rejection notifications."
    },
    {
      event: "Early Bird Registration",
      date: "April 25, 2026",
      description: "Deadline for early bird registration for the conference."
    },
    {
      event: "Camera-Ready Submission",
      date: "April 30, 2026",
      description: "Final versions of accepted papers must be submitted."
    },
    {
      event: "Last Date of Registration",
      date: "April 30, 2026",
      description: "Final date for all participants to register for the conference."
    },
    {
      event: "Conference Start Date",
      date: "May 8, 2026",
      description: "The official start of the National Conference."
    },
    {
      event: "Conference End Date",
      date: "May 9, 2026",
      description: "The final day of the conference."
    }
  ];

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-blue-900 text-center">Important Dates</h2>
        
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
                  key={index}
                  className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-medium whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4 mt-8">
          {dates.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.event}</h3>
              <p className="text-blue-600 font-semibold mb-3">{item.date}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}