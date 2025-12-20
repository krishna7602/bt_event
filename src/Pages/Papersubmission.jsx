import React from "react";

const Papersubmission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Paper Submission
        </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-8">
          This section provides detailed information on how and where to submit
          your research paper for the conference. Authors are requested to
          carefully review the important dates and submission process.
        </p>

        {/* Important Dates */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Important Dates
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Submission Starts:</strong> June 16, 2025
            </li>
            <li>
              <strong>Paper Submission Deadline:</strong> December 18, 2025
              <span className="text-red-600 font-medium"> (Extended)</span>
            </li>
            <li>
              <strong>Notification of Acceptance:</strong> December 29, 2025
            </li>
            <li>
              <strong>Date of Conference:</strong> March 6 – 8, 2026
            </li>
            <li>
              <strong>Early Bird Registration:</strong> January 25, 2026
            </li>
            <li>
              <strong>Camera-Ready Submission:</strong> February 16, 2026
            </li>
          </ul>
        </div>

        {/* Submission Link */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Submission Portal
          </h3>

          <p className="text-gray-700 mb-4">
            All papers must be submitted electronically through the official
            conference submission portal.
          </p>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit via Microsoft CMT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Papersubmission;
