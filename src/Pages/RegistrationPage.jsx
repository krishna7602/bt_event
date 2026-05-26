import React from "react";

const RegistrationPage = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen px-4 md:px-8 lg:px-12">
      <div className="w-full">
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
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6">
              <p className="text-red-600 font-extrabold mb-4 uppercase text-sm tracking-wide">
                PLEASE PAY THE REGISTRATION FEE ONLY THROUGH THE OFFICIAL BANK DETAILS. NO OTHER MEANS OF FEE PAYMENT WILL BE ACCEPTED.
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-100 pb-2">
                  <span className="text-gray-500 text-sm font-medium">Account Name</span>
                  <span className="text-gray-900 font-bold">NITJ CCE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-100 pb-2">
                  <span className="text-gray-500 text-sm font-medium">Account Number</span>
                  <span className="text-gray-900 font-bold font-mono">50100324249116</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-gray-500 text-sm font-medium">IFSC Code</span>
                  <span className="text-gray-900 font-bold font-mono">HDFC0000046</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Confirmation:</strong> After successful payment, kindly fill the{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScIAO1_XLgpUpUXi1nTRnqihtyFFaxLjBdEXzZVF9YOaM0sUw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Google Form
                </a>{" "}
                with your transaction number and other relevant details.
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
          <div className="bg-blue-900 py-6 px-8">
            <h3 className="text-2xl font-bold text-white">Registration Fee Structure</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-center font-bold">
                  <th className="px-5 py-4 text-left border border-gray-200" rowSpan="2">Category</th>
                  <th className="px-5 py-3 border border-gray-200" colSpan="2">Online Participants</th>
                  <th className="px-5 py-3 border border-gray-200" colSpan="2">Offline Participants</th>
                </tr>
                <tr className="bg-gray-200 text-gray-600 text-center text-xs uppercase font-bold">
                  <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                  <th className="px-5 py-2 border border-gray-200">2nd Paper</th>
                  <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                  <th className="px-5 py-2 border border-gray-200">2nd Paper</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (from NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (Other than NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2000 /- + GST<br/><span className="text-xs text-gray-500">=2360</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180 (2nd Paper Free)</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /- + GST<br/><span className="text-xs text-gray-500">=2950</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180 (2nd paper Free)</span></td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (from NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (Other than NITJ)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3000 /- + GST<br/><span className="text-xs text-gray-500">=3540</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br/><span className="text-xs text-gray-500">=4130</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br/><span className="text-xs text-gray-500">=1180</span></td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Industrial Persons</td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br/><span className="text-xs text-gray-500">=4130</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br/><span className="text-xs text-gray-500">=1770</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 4500 /- + GST<br/><span className="text-xs text-gray-500">=5310</span></td>
                  <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br/><span className="text-xs text-gray-500">=1770</span></td>
                </tr>
                <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Students (International)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                  <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                </tr>
                <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                  <td className="px-5 py-4 font-medium border border-gray-200">Faculties (International)</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 125</td>
                  <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-12 space-y-2 text-gray-700 text-sm">
          <p><span className="text-red-600 font-extrabold">• 18% GST need to pay for Indian delegates (other than NITJ Participants).</span></p>
          <p>• The above fee includes all the instructional materials, internet facility and refreshments. The boarding and lodging will be provided on payment basis subjected to availability.</p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Complete Your Registration</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            After making the payment through the official portal, please submit your details via the Google Form to confirm your registration.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScIAO1_XLgpUpUXi1nTRnqihtyFFaxLjBdEXzZVF9YOaM0sUw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-900 font-extrabold py-4 px-12 rounded-full shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Submit Google Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
