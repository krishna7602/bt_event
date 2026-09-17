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

        {/* Online Participation Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-200 mb-12">
          <div className="bg-gradient-to-r from-purple-700 to-indigo-700 py-6 px-8 text-left">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Registration for Online Participants
            </h3>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Info */}
              <div className="text-left">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Participants who are unable to attend the conference in person can register for <strong>online participation</strong>. Online participants will be able to attend all technical sessions, keynote talks, and presentations virtually through the conference platform.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3 items-start">
                    <span className="text-purple-600 font-extrabold mt-0.5">✔</span>
                    <span>Access to all live-streamed technical sessions and keynote talks</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-purple-600 font-extrabold mt-0.5">✔</span>
                    <span>Online presentation opportunity for accepted papers</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-purple-600 font-extrabold mt-0.5">✔</span>
                    <span>E-certificate of participation will be provided</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-purple-600 font-extrabold mt-0.5">✔</span>
                    <span>Conference proceedings and digital materials access</span>
                  </li>
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-purple-50 rounded-2xl border border-purple-100 p-8 flex flex-col items-center justify-center text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-purple-900 mb-2">Join Virtually</h4>
                <p className="text-sm text-gray-600 mb-6">
                  Register as an online participant to attend the conference remotely. The registration link will be shared upon abstract acceptance.
                </p>
                <a
                  href="https://www.nitj.ac.in/events_registration/dbt_ctep_2026/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  <span>Register Online</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
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
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://docs.google.com/document/d/1VCVCFUkEnGE1ycG2VRm6tMOj1kAuV0Ct/edit?usp=sharing&ouid=116207482681575669178&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm text-white border-2 border-white/40 font-black py-4 px-10 rounded-2xl shadow-lg hover:bg-white/25 transition-all transform hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Abstract Template</span>
            </a>
            <a
              href="https://forms.gle/pJ1FgBnWGSsJ9Rdu8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-900 font-black py-4 px-10 rounded-2xl shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Submit Abstract via Google Form</span>
              <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="mt-12 text-center rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(5 150 105), rgb(4 120 87))",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <h3 className="text-3xl font-black mb-4">
            Ready to Complete Your Registration?
          </h3>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto font-medium">
            After abstract acceptance, participants can complete their registration
            through the official payment portal. Please ensure that all registration
            details are filled correctly before proceeding with the payment.
          </p>

          <a
            href="https://www.nitj.ac.in/events_registration/dbt_ctep_2026/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-800 font-black py-4 px-12 rounded-2xl shadow-lg hover:bg-emerald-50 transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Proceed to Payment</span>
            <svg
              className="w-5 h-5 text-emerald-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
