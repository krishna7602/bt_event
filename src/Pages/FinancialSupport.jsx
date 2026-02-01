import React from "react";

const FinancialSupport = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Financial Support
        </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          The conference provides financial support to eligible students and
          faculty members from non-centrally funded technical institutes (CFTIs)
          in India, based on recommendations from subject experts.
        </p>

        {/* Eligibility Criteria */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Eligibility Criteria
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Students who are authors of papers submitted to NZES-2026.</li>
            <li>
              Students enrolled in Ph.D., M.S. (by Research), M.Tech, M.E.,
              B.Tech, or B.E. programs at Indian institutions.
            </li>
            <li>
              Applicants must remain students until at least{" "}
              <strong>May 31, 2026</strong>.
            </li>
            <li>
              Faculty members from non-CFTIs working in systems and control.
            </li>
          </ul>
        </div>

        {/* Support Provided */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Support Provided
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Registration fee support</li>
            <li>Accommodation fee support</li>
            <li>Partial travel support (if applicable)</li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Application Process
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Submit applications through the official online form (link to be
              announced).
            </li>
            <li>
              Applications must be submitted before the announced deadline.
            </li>
          </ul>
        </div>

        {/* Reimbursement Process */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Reimbursement Process
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Selected applicants must register for NZES-2026.</li>
            <li>
              Reimbursement of registration, accommodation, and travel expenses
              will be processed after conference participation.
            </li>
            <li>
              Full attendance throughout the conference is mandatory for
              reimbursement.
            </li>
          </ul>
        </div>

        {/* Notification */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Notification
          </h3>

          <p className="text-gray-700">
            Selected applicants will be notified via email. Applicants are
            advised to ensure that a valid and accurate email address is
            provided during the application process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialSupport;
