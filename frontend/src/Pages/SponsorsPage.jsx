import React from "react";

export default function SponsorsPage() {
  return (
    <section className="pt-24 pb-16 min-h-screen" style={{ backgroundImage: "linear-gradient(to bottom, #0f172a, #064e3b)" }}>
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Sponsors</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We gratefully acknowledge the support of our sponsors for making RICE-WVES 2026 possible.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8">Title Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <span className="text-2xl font-bold text-slate-800">DBT-CTEP</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">DBT-CTEP</h3>
              <p className="text-gray-300 text-sm mt-1">Department of Biotechnology - Centre for Technology, Education & Partnership</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                <span className="text-2xl font-bold text-slate-800">ANRF</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">ANRF</h3>
              <p className="text-gray-300 text-sm mt-1">Anusandhan National Research Foundation</p>
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-8 text-center shadow-xl border border-emerald-600/30">
            <h3 className="text-2xl font-bold text-white mb-3">Interested in Sponsoring?</h3>
            <p className="text-gray-200 mb-6">
              Partner with RICE-WVES 2026 and showcase your organization to researchers, academicians, and industry professionals from across the country.
            </p>
            <a
              href="mailto:ricewves@nitj.ac.in"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
            >
              📧 Contact Us for Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
