import React from "react";

const PaperPublication = () => {
  const publicationDates = [
    {
      event: "Paper Acceptance Date",
      date: "2 May, 2026",
      status: "Notice",
    },
    {
      event: "Camera-Ready Submission",
      date: "3 May, 2026",
      status: "Deadline",
    },
    {
      event: "Last Date of Registration",
      date: "5 May, 2026",
      status: "Deadline",
    }
  ];

  return (
    <section className="py-20 bg-[#f8fafc] px-4 md:px-8 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Paper Publication
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide uppercase border-b-4 border-blue-600 pb-2 inline-block">
            Proceedings & Journals
          </h2>
        </div>

        {/* Introduction */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-lg md:text-xl text-justify">
          <p>
            It is planned to publish the peer-reviewed and selected papers of the conference as proceedings in a 
            <span className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4 mx-1">
              reputed series
            </span>. 
            Selected papers will be published as a conference proceedings volume, subject to quality standards.
          </p>

          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Important Publication Dates</h3>
            <div className="grid gap-4">
              {publicationDates.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="font-semibold text-slate-200">{item.event}</span>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <span className="text-blue-300 font-mono font-bold tracking-wider">{item.date}</span>
                    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-black ${
                      item.status === 'Deadline' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication Process */}
          <div className="bg-white border-2 border-slate-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">1</span>
              Publication Process
            </h3>
            <ul className="space-y-4">
              {[
                "All accepted papers will undergo internal quality checks before publication.",
                "Only papers that successfully pass these checks will be included in the proceedings volume.",
                "There is no publication fee for Non-Open Access content.",
                "Papers exceeding 10 pages are not eligible for publication."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-2 w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors shrink-0"></div>
                  <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidelines & Submission */}
          <div className="bg-blue-50 border-2 border-blue-100 p-8 rounded-[2rem] relative overflow-hidden">
             <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
             <h3 className="text-2xl font-black text-blue-900 mb-4">Author & Editor Guidelines</h3>
             <p className="mb-6 text-blue-800/80">
               For detailed instructions regarding manuscript preparation, formatting, and editorial processes, authors are advised to refer to the official guidelines and submit via the CMT portal:
             </p>
             <div className="flex flex-wrap gap-4">
               <a 
                 href="https://drive.google.com/uc?export=download&id=1Ui00X8k-EV5IWRGnI69EAii-hSLVMaIt" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-6 py-4 bg-white text-blue-700 font-bold rounded-2xl border-2 border-blue-200 hover:border-blue-600 transition-all active:scale-95 group"
               >
                 <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                 </svg>
                 <span>Word Template</span>
               </a>

               <a 
                 href="https://drive.google.com/uc?export=download&id=1Dw_0mTFLfz1DfYWb3YgFr6lvMcflMO3e"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-6 py-4 bg-white text-purple-700 font-bold rounded-2xl border-2 border-purple-200 hover:border-purple-600 transition-all active:scale-95 group"
               >
                 <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.607a1 1 0 01-.226 1.396l-.867.65a1 1 0 11-1.17-1.562l.867-.65a1 1 0 011.396.226zM15.313 7.1a1 1 0 01.116 1.409l-.65.867a1 1 0 11-1.6-1.202l.65-.867a1 1 0 011.484-.207zM5 10a1 1 0 011-1h1.5a1 1 0 110 2H6a1 1 0 01-1-1zM14 10a1 1 0 011-1h1.5a1 1 0 110 2H15a1 1 0 01-1-1zM8.25 11.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
                 </svg>
                 <span>LaTeX Template</span>
               </a>

               <a 
                 href="https://cmt3.research.microsoft.com/NZES2026" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group ml-auto"
               >
                 <span>Submit Camera-Ready (CMT)</span>
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a>
             </div>
          </div>

          {/* Note */}
          <div className="bg-rose-50 border-l-8 border-rose-500 p-8 rounded-r-2xl">
            <p className="text-rose-900 leading-relaxed">
              <strong className="text-rose-700 uppercase tracking-widest block mb-2 text-xs font-black italic">Important Note:</strong>
              Final inclusion of papers in the proceedings is subject to successful peer review, compliance with formatting requirements, and completion of all registration and camera-ready submission procedures.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaperPublication;
