import React from "react";

const PaperSubmission = () => {
  return (
    <section className="py-20 bg-[#f8fafc] px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Paper Submission
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 uppercase tracking-wide">
            Conference Submission Guidelines
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start text-justify">
          
          {/* Left Column: Guidelines */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 leading-relaxed text-slate-700 space-y-6 text-lg">
              <p>
                The authors are invited to submit <span className="font-semibold text-slate-900">Abstract/Full papers</span> of Research/Review Papers. The papers will be peer-reviewed, and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
              </p>

              <p>
                The proceedings are submitted for approval for publication in the <span className="font-bold text-blue-700">Springer series</span>.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                <p className="font-bold text-amber-900 flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  NOTE: Acceptance of a full-length submission is strictly based on the reviewers&apos; comments.
                </p>
              </div>

              <p>
                At least one of the authors of an accepted paper needs to register for the conference and present the paper(s) through an <span className="font-semibold text-slate-900">Online Mode presentation</span>.
              </p>
            </div>

            {/* Submission Portal & Acknowledgement */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 shadow-xl transform transition hover:scale-[1.01]">
              <div className="bg-white rounded-[1.4rem] p-8 md:p-10">
                <h4 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.148l.893-.893a9.412 9.412 0 002.833-6.13V7.332C7.027 6.752 5.239 6.4 3.5 6.4m11 5.888a12.508 12.508 0 001.666-3.837V5.91a12.13 12.13 0 00-1.808-6.131M11 11l.243-.243a8.103 8.103 0 012.828-1.586m-4.72.364a9.052 9.052 0 005.091-.497"></path></svg>
                  </div>
                  Submission Portal
                </h4>
                
                <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-6 rounded-2xl mb-8">
                  <p className="text-slate-800 text-lg font-medium leading-relaxed">
                    All submissions need to be submitted through the CMT using the link:{" "}
                    <span className="block mt-2 text-2xl font-black text-blue-600 animate-pulse italic">link will be updated soon</span>
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">
                      CMT Acknowledgement
                    </h5>
                    <p className="text-slate-700 italic text-sm md:text-base leading-relaxed">
                      The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Precaution */}
            <div className="bg-rose-50 border border-rose-100 p-8 rounded-2xl shadow-sm">
              <p className="text-rose-900 flex items-start gap-4">
                <div className="p-2 bg-rose-100 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <span className="text-lg leading-relaxed">
                  <strong className="text-rose-700 uppercase tracking-wider block mb-1">Precaution:</strong> 
                  The authors are advised to take care of the technical language used in the manuscript and refrain from using words that are prohibited to use at national and international levels.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Key Info & Downloads */}
          <div className="space-y-8">
            {/* Important Dates Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
              <div className="bg-slate-900 p-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Important Dates
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { label: "Submission Starts", date: "5 Feb, 2026", color: "bg-green-100 text-green-700" },
                    { label: "Submission Deadline", date: "15 Apr, 2026", color: "bg-red-100 text-red-700" },
                    { label: "Acceptance Date", date: "20 Apr, 2026", color: "bg-blue-100 text-blue-700" },
                    { label: "Camera-Ready", date: "30 Apr, 2026", color: "bg-indigo-100 text-indigo-700" },
                    { label: "Registration Deadline", date: "30 Apr, 2026", color: "bg-purple-100 text-purple-700" },
                    { label: "Conference Dates", date: "8-9 May, 2026", color: "bg-slate-900 text-white" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex flex-col border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</span>
                      <span className={`text-sm font-black px-3 py-1 rounded-full w-fit ${item.color}`}>
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Author Templates Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-100 p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  Author Templates
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Please use the following templates. Papers must strictly adhere to the formatting.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="/Conference_Paper_Template.zip"
                  download
                  className="flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-blue-100 transition shadow-sm">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12.9,14.5L11,10.5H9L12,16.5L15,10.5H13L11.1,14.5L12.9,14.5Z"/></svg>
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-blue-900 transition text-sm">MS Word Template</span>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>

                <a
                  href="https://drive.google.com/uc?export=download&id=1rgNgJ_GFefkJtQBE4OkOdw4K5p9Usu4S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-200 rounded-2xl transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg group-hover:bg-rose-100 transition shadow-sm">
                      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-rose-900 transition text-sm">LaTeX Templates</span>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-rose-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;

