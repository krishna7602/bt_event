import React from "react";

const GuidelinesToAuthors = () => {
  const deadlines = [
    { event: "Submission Opens", date: "5 February, 2026" },
    { event: "Submission Deadline", date: "6 May, 2026", highlight: true },
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
        <div className="space-y-10 text-slate-700 leading-relaxed text-lg md:text-xl text-justify">
          <p>
            All papers must be submitted electronically through the official{" "}
            <a 
              href="https://cmt3.research.microsoft.com/NZES2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4 hover:text-blue-800 transition-colors"
            >
              Microsoft CMT Submission Portal
            </a>. 
            We invite researchers, academicians, and industry professionals to submit original, innovative, and high-quality research papers aligned with the conference tracks.
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
                "Manuscripts must strictly adhere to the prescribed formatting template.",
                "Regular Paper length: Maximum 10 pages, including methodology and findings.",
                "All submissions must align with the conference tracks and demonstrate technical rigor.",
                "Format using the prescribed template and submit only via the official link.",
                "Include sufficient technical detail to facilitate a thorough peer review."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors shrink-0"></div>
                  <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Templates */}
          <div className="bg-blue-900 text-white rounded-[2rem] p-8 md:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Author Templates</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1Ui00X8k-EV5IWRGnI69EAii-hSLVMaIt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                MS Word Template
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1Dw_0mTFLfz1DfYWb3YgFr6lvMcflMO3e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.607a1 1 0 01-.226 1.396l-.867.65a1 1 0 11-1.17-1.562l.867-.65a1 1 0 011.396.226zM15.313 7.1a1 1 0 01.116 1.409l-.65.867a1 1 0 11-1.6-1.202l.65-.867a1 1 0 011.484-.207zM5 10a1 1 0 011-1h1.5a1 1 0 110 2H6a1 1 0 01-1-1zM14 10a1 1 0 011-1h1.5a1 1 0 110 2H15a1 1 0 01-1-1zM8.25 11.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
                </svg>
                LaTeX Macros
              </a>
            </div>
          </div>

          {/* Action Call */}
          <div className="text-center pt-6">
            <a 
              href="https://cmt3.research.microsoft.com/NZES2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              <span>Submit via CMT Portal</span>
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
