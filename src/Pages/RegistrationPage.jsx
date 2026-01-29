import React from "react";

const RegistrationPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Registration
        </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          To ensure inclusion in the final conference program for presentation
          and publication, authors must strictly adhere to the following
          registration requirements.
        </p>

        {/* Mandatory Guidelines */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Registration Requirements
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✔ <strong>Mandatory Registration:</strong> At least one author (Main Author) of each accepted paper must complete registration on or before the final deadline.</li>
            <li>✔ <strong>Paper Limit per Registration:</strong> One full registration is valid for one (1) paper only (5–7 pages).</li>
            <li>✔ <strong>Payment Confirmation:</strong> Authors must retain the Transaction ID / UTR number for verification.</li>
            <li>✔ <strong>Non-Refundable Fee:</strong> Registration fees are non-refundable under any circumstances.</li>
          </ul>

          <p className="text-gray-700 mt-4">
            For registration-related queries, please contact the conference
            secretariat or refer to the official conference website.
          </p>
        </div>

        {/* Optional Registration */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Optional Registration Categories
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>
              ✔ <strong>Joint Presentation:</strong> Both main author and
              co-presenter must register separately to receive presentation
              certificates.
            </li>
            <li>
              ✔ <strong>Attendee Registration (Non-Author):</strong> Access to
              keynote sessions, panels, and technical sessions. Papers will not
              be included in proceedings. Participation certificate provided.
            </li>
          </ul>
        </div>

        {/* Fee Table */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10 overflow-x-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Registration Fee Details (Including GST)
          </h3>

          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">Early Registration</th>
                <th className="border p-3 text-left">Late Registration</th>
                <th className="border p-3 text-left">Additional Paper</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border p-3">Students / Research Scholar</td>
                <td className="border p-3">₹ 6,500</td>
                <td className="border p-3">₹ 7,500</td>
                <td className="border p-3">50% of registration amount</td>
              </tr>
              <tr>
                <td className="border p-3">Academicians</td>
                <td className="border p-3">₹ 7,500</td>
                <td className="border p-3">₹ 8,500</td>
                <td className="border p-3">50% of registration amount</td>
              </tr>
              <tr>
                <td className="border p-3">Industry Participants</td>
                <td className="border p-3">₹ 9,000</td>
                <td className="border p-3">₹ 10,000</td>
                <td className="border p-3">50% of registration amount</td>
              </tr>
              <tr>
                <td className="border p-3">Foreign Authors</td>
                <td className="border p-3">USD 250</td>
                <td className="border p-3">USD 280</td>
                <td className="border p-3">50% of registration amount</td>
              </tr>
              <tr>
                <td className="border p-3">Accompanying Person</td>
                <td className="border p-3">50% of registration amount</td>
                <td className="border p-3">50% of registration amount</td>
                <td className="border p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Includes */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Registration Fee Includes
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Access to all conference & workshop sessions</li>
            <li>Paper presentation and publication</li>
            <li>Conference certificate</li>
            <li>Registration kit</li>
            <li>High-Tea & Lunch (8th–9th May 2026)</li>
            <li>Gala Dinner (8th May 2026)</li>
          </ul>
        </div>

        {/* Bank Details */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Account Details
          </h3>

          <p className="text-gray-700"><strong>Bank Name:</strong> Indian Bank</p>
          <p className="text-gray-700"><strong>Branch:</strong> NIT Patna Campus</p>
          <p className="text-gray-700"><strong>Account Name:</strong> NIT Patna CF Account</p>
          <p className="text-gray-700"><strong>Account Number:</strong> 50433562364</p>
          <p className="text-gray-700"><strong>IFSC Code:</strong> IDIB000B810</p>
          <p className="text-gray-700"><strong>MICR Code:</strong> 800019027</p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
