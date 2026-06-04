import React from "react";

const GuidelinesToAuthors = () => {
  const deadlines = [
    { event: "Abstract Submission Starts", date: "June 01, 2026" },
    { event: "Abstract Submission Closes", date: "September 10, 2026", highlight: true },
  ];

  return (
    <section className="py-20 bg-[#f8fafc] px-4 md:px-8 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100">

        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Guidelines to Authors
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide uppercase border-b-4 border-blue-600 pb-2 inline-block">
            Submission Standards
          </h2>
        </div>

        {/* Content Section */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-lg md:text-xl text-justify text-left">
          <p>
            All abstracts must be submitted electronically through the official{" "}
            <a
              href="https://forms.gle/pJ1FgBnWGSsJ9Rdu8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4 hover:text-blue-800 transition-colors"
            >
              Google Form Submission Portal
            </a>.
            We invite researchers, academicians, and industry professionals to submit original, innovative, and high-quality research abstracts aligned with the conference thematic areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deadlines.map((d, i) => (
              <div key={i} className={`p-6 rounded-2xl border-2 ${d.highlight ? 'bg-rose-50 border-rose-100' : 'bg-slate-50 border-slate-100'}`}>
                <span className={`text-xs font-black uppercase tracking-widest block mb-2 ${d.highlight ? 'text-rose-600' : 'text-slate-500'}`}>
                  {d.event}
                </span>
                <span className={`text-2xl font-black ${d.highlight ? 'text-rose-900 animate-blink inline-block' : 'text-slate-900'}`}>{d.date}</span>
              </div>
            ))}
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white border-2 border-slate-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-6 font-display">Submission Guidelines</h3>
            <ul className="space-y-4">
              {[
                "Abstracts must strictly adhere to the conference themes and standards.",
                "Authors will be notified of the acceptance of their abstracts within one to two weeks of submission.",
                "Accepted abstracts will be considered for oral presentations based on the quality, relevance, and originality of the work.",
                "Presentation slots are subject to the order of submission and availability.",
                "Formatting templates and detailed registration links will be provided upon abstract acceptance."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors shrink-0"></div>
                  <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Templates */}
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/document/d/1VCVCFUkEnGE1ycG2VRm6tMOj1kAuV0Ct/edit?rtpof=true&sd=true&tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
              </svg>
              Abstract Template →
            </a>
          </div>

          {/* Action Call */}
          <div className="text-center pt-6">
            <a
              href="https://forms.gle/pJ1FgBnWGSsJ9Rdu8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              <span>Submit Abstract via Google Form</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuidelinesToAuthors;
