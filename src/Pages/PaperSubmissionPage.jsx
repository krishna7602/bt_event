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
              <strong>Paper Submission Starts:</strong> 5 February, 2026
            </li>
            <li>
              <strong>Paper Submission Deadline:</strong> 15 April, 2026
            </li>
            <li>
              <strong>Paper Acceptance Date:</strong> 20 April, 2026
            </li>
            <li>
              <strong>Camera-Ready Submission:</strong> 30 April, 2026
            </li>
            <li>
              <strong>Last Date of Registration:</strong> 30 April, 2026
            </li>
            <li>
              <strong>Conference Dates:</strong> 8-9 May, 2026
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

          <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-blue-700 font-bold italic animate-pulse">
              Microsoft CMT Submission Portal - Coming Soon!
            </p>
          </div>
        </div>

        {/* Templates */}
        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Author Templates
          </h3>
          <p className="text-gray-700 mb-4">
            Please use the following templates for manuscript preparation. Papers must strictly adhere to the prescribed formatting template.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Conference_Paper_Template.zip"
              download
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

        {/* CMT Acknowledgement */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-lg shadow-lg">
            <h4 className="text-red-700 text-2xl font-extrabold mb-4 uppercase tracking-tight">
              CMT Acknowledgement
            </h4>
            <p className="text-red-900 text-lg md:text-xl font-semibold leading-relaxed italic">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;
