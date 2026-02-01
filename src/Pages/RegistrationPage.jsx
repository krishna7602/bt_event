import React from "react";

const RegistrationPage = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Registration <span className="text-blue-600">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guidelines, fee structure, and instructions for conference registration.
          </p>
        </div>

        {/* Instructions & Portals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Fee Payment Instructions */}
          <div className="bg-white border-l-8 border-blue-600 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Fee Payment
            </h3>
            <p className="text-gray-700 font-bold mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              PLEASE PAY THE REGISTRATION FEE ONLY THROUGH THE OFFICIAL PAYMENT PORTAL. NO OTHER MEANS OF FEE PAYMENT WILL BE ACCEPTED.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Confirmation:</strong> After successful payment, kindly fill the Google Form (link will be provided soon) with your transaction number and other relevant details.
              </p>
              <p>
                <strong>Full Paper:</strong> After the conference, a link will be sent to participants for submission of full-length papers.
              </p>
              <p>
                <strong>Publishing Fee:</strong> If accepted for publication after peer-review, authors may be required to pay a publishing fee as per the publisher's policy.
              </p>
            </div>
          </div>

          {/* Registration Guidelines */}
          <div className="bg-white border-l-8 border-green-600 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Instructions
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <span><strong>Compulsory Registration:</strong> Registration is mandatory for all papers to be considered for processing.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <span><strong>Delegate Registration:</strong> All attending delegates must register independently.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <span><strong>Student Status:</strong> Student registrations are valid only if the first author is a full-time student.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✔</span>
                <span><strong>Publication:</strong> Fee covers registration only; publication charges are separate.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fee Table Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          <div className="bg-blue-900 py-6 px-8">
            <h3 className="text-2xl font-bold text-white">Registration Fee Structure</h3>
            <p className="text-blue-100 mt-1">Note: 18% extra GST will be added to the base amount.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm font-bold border-b">
                  <th className="px-8 py-4">Category</th>
                  <th className="px-8 py-4">Offline Participation</th>
                  <th className="px-8 py-4 transition-colors">Online Participation</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-100">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">PhD / PG / UG Research Scholar (External)</td>
                  <td className="px-8 py-5">₹ 3,000</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">₹ 2,500</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">NITJ PhD / PG / UG Research Scholar</td>
                  <td className="px-8 py-5">₹ 2,500</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">₹ 2,000</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">Faculty / Industry</td>
                  <td className="px-8 py-5">₹ 5,000</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">₹ 4,000</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">Co-author / Listener / Accompanying Person</td>
                  <td className="px-8 py-5">₹ 1,500</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">₹ 1,000</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">Foreign Faculty / Industry</td>
                  <td className="px-8 py-5">USD 100</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">USD 50</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-8 py-5 font-medium">Foreign Student</td>
                  <td className="px-8 py-5">USD 100</td>
                  <td className="px-8 py-5 text-blue-600 font-semibold">USD 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Register?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            The registration portal will be updated shortly. Please keep your transaction details ready after making the payment via the upcoming portal link.
          </p>
          <div className="inline-block bg-white text-blue-900 font-extrabold py-4 px-12 rounded-full shadow-lg cursor-not-allowed opacity-80">
            Registration Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
