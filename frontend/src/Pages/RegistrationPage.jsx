import React from "react";

const RegistrationPage = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Registration <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Guidelines, fee structure, and instructions for RICE-WVES 2026 registration.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Instructions */}
          <div className="bg-white border-l-8 border-blue-600 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black">1</span>
                Instructions
              </h3>
              <ul className="space-y-4 text-gray-700 text-left">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Compulsory Registration:</strong> Registration is mandatory for all accepted papers to be considered for presentation and publication in the proceedings.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Delegate Registration:</strong> All attending delegates must register independently.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Fee Inclusion:</strong> The registration fee includes all the instructional materials, internet facility, lunch (3 days) and refreshments.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-extrabold mt-0.5">✔</span>
                  <span><strong>Boarding & Lodging:</strong> Boarding and lodging will be provided on a payment basis, subject to availability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Who Can Attend */}
          <div className="bg-white border-l-8 border-green-600 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="bg-green-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black">2</span>
                Who Can Attend
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-left">
                Faculty members from colleges, universities, and technical institutes, students (UG/PG), research scholars, and industry professionals working in circular economy, waste valorisation, green technologies, biotechnology, and environmental sustainability fields are welcome to participate.
              </p>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-left">
                <h4 className="font-bold text-green-900 mb-2">Technical Sessions</h4>
                <ul className="grid grid-cols-3 gap-2 text-sm text-green-800 font-bold">
                  <li>• Invited Talks</li>
                  <li>• Oral Presentations</li>
                  <li>• Poster Presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Table Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 mb-12">
          <div className="bg-blue-900 py-6 px-8 text-left">
            <h3 className="text-2xl font-bold text-white">Registration Fee Structure</h3>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Students Card */}
              <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100/50 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Students & Research Scholars</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex justify-between border-b border-blue-100/30 pb-2">
                      <span className="font-medium">From NIT Jalandhar:</span>
                      <span className="font-extrabold text-blue-950">Rs. 1,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Other than NITJ:</span>
                      <span className="font-extrabold text-blue-950">Rs. 2,000 <span className="text-[10px] text-gray-500 font-normal">(incl. GST @18%)</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Faculty Card */}
              <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100/50 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Faculty Members</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex justify-between border-b border-blue-100/30 pb-2">
                      <span className="font-medium">From NIT Jalandhar:</span>
                      <span className="font-extrabold text-blue-950">Rs. 2,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Other than NITJ:</span>
                      <span className="font-extrabold text-blue-950">Rs. 3,000 <span className="text-[10px] text-gray-500 font-normal">(incl. GST @18%)</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Industry Card */}
              <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100/50 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Industry Participants</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span className="font-medium">Registration Fee:</span>
                      <span className="font-extrabold text-blue-950">Rs. 3,500 <span className="text-[10px] text-gray-500 font-normal">(incl. GST @18%)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
          style={{ backgroundImage: "linear-gradient(to right, rgb(37 99 235), rgb(67 56 202))" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-3xl font-black mb-4">Ready to Submit your Abstract?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
            Abstracts can be submitted via the official Google Form. The payment and registration links will be sent to your email upon acceptance of your abstract.
          </p>
          <a
            href="https://forms.gle/pJ1FgBnWGSsJ9Rdu8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-900 font-black py-4 px-12 rounded-2xl shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Submit Abstract via Google Form</span>
            <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
