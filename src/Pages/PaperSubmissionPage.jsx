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
            The authors are invited to submit <span className="font-bold text-slate-900">Abstract/Full papers</span> of Research/Review Papers. The papers will be peer-reviewed, and only the accepted and registered papers will be considered for presentation during the conference and publication in the proceedings.
          </p>

          <p>
            The proceedings are submitted for approval for publication in the <span className="font-extrabold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4">Springer series</span>.
          </p>

          <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-2xl shadow-inner">
            <p className="font-black text-amber-900 leading-tight">
              NOTE: Acceptance of a full-length submission is strictly based on the reviewers&apos; comments.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl transform transition hover:scale-[1.01]">
            <p className="text-blue-300 font-bold mb-8 text-xl leading-relaxed">
              All submissions need to be submitted through the CMT.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">
                CMT Acknowledgement
              </h4>
              <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
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


