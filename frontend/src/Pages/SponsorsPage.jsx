import React from "react";
import klorofilLogo from "../assets/sponsors/klorofil.png";
import lifetronicsLogo from "../assets/sponsors/lifetronics.png";
import srlLogo from "../assets/sponsors/srl.png";

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
              <p className="text-gray-300 text-sm mt-1">Department of Biotechnology - Conference, Travel, Exhibition and Popular Lectures</p>
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

        {/* Conference Sponsors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-400 text-center mb-8">Conference Sponsors</h2>
          
          {/* Gold & Silver Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Gold Sponsor Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                Gold Sponsor
              </span>
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-3 shadow-md">
                <img
                  src={klorofilLogo}
                  alt="Klorofil Scientific"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mt-2">Klorofil Scientific</h3>
              <p className="text-gray-300 text-sm mt-1">...facilitating research</p>
            </div>

            {/* Silver Sponsor Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-slate-300/20 text-slate-200 border border-slate-300/30 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                Silver Sponsor
              </span>
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-4 shadow-md">
                <span className="text-xl font-bold text-slate-800 leading-snug">Ocean Scientific</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-2">Ocean Scientific</h3>
              <p className="text-gray-300 text-sm mt-1">Ludhiana</p>
            </div>
          </div>

          {/* Associate Sponsor Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/15 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Associate Sponsors
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto justify-items-center">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-3 shadow-md">
                    <img
                      src={lifetronicsLogo}
                      alt="Lifetronics"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">Lifetronics</h3>
                  <p className="text-gray-300 text-sm mt-1">Makes Life Easier......</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-3 shadow-md">
                    <img
                      src={srlLogo}
                      alt="SRL"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">SRL</h3>
                  <p className="text-gray-300 text-sm mt-1">Sisco Research Laboratories</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-4 p-4 shadow-md">
                    <span className="text-xl font-bold text-slate-800 leading-snug">Akay Scientific</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">Akay Scientific</h3>
                  <p className="text-gray-300 text-sm mt-1">Jalandhar</p>
                </div>
              </div>
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
