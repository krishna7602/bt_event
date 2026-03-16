import React from "react";

const PaperSubmission = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12 text-justify">
      <div className="w-full">
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
              <strong>Submission Starts:</strong> February 8, 2026
            </li>
            <li>
              <strong>Paper Submission Deadline:</strong> March 31, 2026
              <span className="text-red-600 font-medium"> (Final)</span>
            </li>
            <li>
              <strong>Notification of Acceptance:</strong> April 20, 2026
            </li>
            <li>
              <strong>Date of Conference:</strong> May 8 – 9, 2026
            </li>
            <li>
              <strong>Early Bird Registration:</strong> April 25, 2026
            </li>
            <li>
              <strong>Camera-Ready Submission:</strong> April 30, 2026
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSczY1J179v1kDFQD381l7IKVo6sU8iJwZVRPwgr4pq9VG2bUw/viewform?usp=sharing&ouid=113683214684140309598"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit via Google Form
          </a>
        </div>

        {/* Templates */}
        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Author Templates
          </h3>
          <p className="text-gray-700 mb-4">
            Please use the following templates for manuscript preparation. Papers must strictly adhere to the Springer formatting template.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition font-medium"
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.9,14.5L11,10.5H9L12,16.5L15,10.5H13L11.1,14.5L12.9,14.5Z"/></svg>
              MS Word Template
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1rgNgJ_GFefkJtQBE4OkOdw4K5p9Usu4S"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              LaTeX Templates (TEX)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;
