import React from "react";

const PaperSubmission = () => {
  return (
    <section className="py-20 bg-[#f8fafc] px-4 md:px-8 lg:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-100">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Abstract Submission
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide uppercase border-b-4 border-blue-600 pb-2 inline-block">
            Conference Submission Guidelines
          </h2>
        </div>

        <div className="text-center">
          Details regarding paper submission will be updated soon.
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;
