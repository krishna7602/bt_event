import React from "react";

const PaperSubmission = () => {
  return (
    <section className="py-20 bg-[#f8fafc] px-4 md:px-8 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Paper Submission
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide uppercase border-b-4 border-blue-600 pb-2 inline-block">
            Conference Submission Guidelines
          </h2>
        </div>

        {/* Guidelines Content */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-lg md:text-xl text-justify">
          <p>
            The authors are invited to submit <span className="font-bold text-slate-900">Abstract/Full papers</span> of Research/Review Papers. All papers must be submitted electronically through the official{" "}
            <a 
              href="https://cmt3.research.microsoft.com/NZES2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4 hover:text-blue-800 transition-colors"
            >
              Microsoft CMT Submission Portal
            </a>. 
            The papers will be peer-reviewed, and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
          </p>

          <p>
            The proceedings are submitted for approval for publication in the <span className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4">Springer series</span>.
          </p>

          <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-2xl shadow-inner">
            <p className="font-black text-amber-900 leading-tight">
              NOTE: Acceptance of a full-length submission is strictly based on the reviewers&apos; comments.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Important Deadlines</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 w-32">Starts:</span>
                    <span className="font-mono text-xl font-bold">5 Feb, 2026</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 w-32">Deadline:</span>
                    <span className="font-mono text-xl font-bold text-rose-400 underline decoration-rose-500/30 underline-offset-8 animate-blink inline-block">22 April, 2026</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://cmt3.research.microsoft.com/NZES2026" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 transition-all group"
              >
                <span>Submit via CMT</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">
                CMT Acknowledgement
              </h4>
              <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. Access the portal here: <a href="https://cmt3.research.microsoft.com/NZES2026" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold underline decoration-blue-400/30 hover:text-blue-300 transition-colors">NZES 2026 @ Microsoft CMT</a>.
              </p>
            </div>
          </div>

          {/* Templates Section */}
          <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2rem] relative overflow-hidden">
             <h3 className="text-2xl font-black text-slate-900 mb-4">Templates & Formatting</h3>
             <p className="mb-6 text-slate-600">
               Please ensure your manuscript follows the official conference formatting guidelines. You can download the templates below:
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
             </div>
          </div>

          <p className="font-medium">
            At least one of the authors of an accepted paper needs to register for the conference and present the paper(s) through an <span className="font-black text-slate-900 bg-blue-50 px-2 py-1 rounded">Online Mode presentation</span>.
          </p>

          <div className="bg-rose-50 border-2 border-rose-100 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
            <p className="text-rose-900 leading-relaxed relative z-10">
              <strong className="text-rose-700 uppercase tracking-[0.1em] block mb-2 text-sm font-black">Precaution:</strong> 
              The authors are advised to take care of the technical language used in the manuscript and refrain from using words that are prohibited to use at national and international levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;


