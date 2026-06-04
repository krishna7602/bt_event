import React from "react";
import { defaultSiteConfig } from "../config/defaultSiteConfig";
import logo from "../assets/logo.png";
import track1Img from "../assets/track_1_renewable.png";
import track2Img from "../assets/track_2_smartgrids.png";
import track3Img from "../assets/track_3_multienergy.png";
import track4Img from "../assets/track_4_policy.png";
import track5Img from "../assets/track_5_intelligent.png";
import track6Img from "../assets/track_6_ev.jpg";

const defaultSlides = [
  { url: track1Img, caption: "Waste Valorization Technologies" },
  { url: track2Img, caption: "Energy Recovery from Waste" },
  { url: track3Img, caption: "Water, Wastewater, and Sludge Management" },
  { url: track4Img, caption: "Bioeconomy and Biorefinery Approaches" },
];

export default function Hero() {
  // Use static site config from defaultSiteConfig (static content)
  const hero = defaultSiteConfig.hero;
  const carouselImages = hero.carouselImages?.length ? hero.carouselImages : defaultSlides;
  const sponsors = hero.sponsors?.length ? hero.sponsors : defaultSiteConfig.hero.sponsors;

  // Use the first image as a static hero image (no slideshow)
  const currentImage = carouselImages[0] || defaultSlides[0];

  return (
    <>
      <div
        id="home"
        className="pt-20 text-white"
        style={{ backgroundImage: "linear-gradient(to bottom, #0f172a, #064e3b)" }}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-9">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 mb-10">
                <div className="w-32 h-32 flex-shrink-0 bg-white rounded-full flex items-center justify-center border-4 border-emerald-500 overflow-hidden shadow-lg mx-auto md:mx-0">
                  <img src={logo} alt="RICE-WVES 2026 Logo" className="w-full h-full object-contain p-2" />
                </div>

                <div className="flex-1">
                  <h1 className="font-extrabold leading-tight mb-4">
                    <span className="block text-white text-xl md:text-2xl lg:text-3xl mb-2 leading-snug">
                      DBT-CTEP SPONSORED
                      NATIONAL CONFERENCE <br />
                      ON
                    </span>
                    <span className="block text-emerald-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                      RECENT INNOVATIONS IN CIRCULAR ECONOMY FOR WASTE VALORIZATION AND ENVIRONMENTAL SUSTAINABILITY
                    </span>
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <p className="text-lg text-gray-300 max-w-3xl">
                      {hero.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-800 rounded-xl p-5 inline-block shadow-lg mb-8">
                <p className="text-lg font-semibold">
                  {hero.dateLabel || "Date"}: <span className="text-emerald-600">{hero.dateValue || "12-13 June, 2026"}</span>
                </p>
                {hero.notice ? <p className="text-sm text-red-500 font-medium mt-1">{hero.notice}</p> : null}
              </div>

              <p className="text-xl text-gray-200 max-w-4xl mx-auto md:mx-0">
                {hero.tagline}
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-center lg:justify-end items-center lg:items-start w-full">
              <div className="w-full max-w-xs lg:max-w-56">
                <h3 className="text-4xl text-emerald-400 font-extrabold mb-6 text-center lg:text-right">Sponsors</h3>
                <div className="space-y-6">
                  {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="flex items-center gap-4 rounded-2xl p-3 bg-white/5 border border-white/5">
                      <div className="w-28 h-16 rounded-md flex items-center justify-center bg-white/5 p-2 flex-shrink-0">
                        <img src={sponsor.imageUrl} alt={sponsor.name} className="max-h-12 object-contain" />
                      </div>
                      <div className="flex-1 text-left lg:text-right">
                        <p className="text-sm font-semibold text-gray-200">{sponsor.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="grid gap-0">
              <div className="relative bg-slate-950">
                <img src={currentImage.url} alt={currentImage.caption} className="w-full h-56 lg:h-72 object-cover opacity-95" />
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to top, rgba(2,6,23,0.6), rgba(2,6,23,0.2), transparent)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="inline-block rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-200 backdrop-blur">{currentImage.caption}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="fees" className="w-full py-12 text-gray-800">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
              <div className="bg-slate-900 py-6 px-8">
                <h3 className="text-2xl font-bold text-white text-left">Registration Fee Structure</h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category 1 */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Students & Research Scholars</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• From NIT Jalandhar: <span className="font-bold">Rs. 1,500</span></li>
                        <li>• Other than NIT Jalandhar: <span className="font-bold">Rs. 2,000</span> <span className="text-xs text-gray-500">(incl. GST @18%)</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Faculty Members</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• From NIT Jalandhar: <span className="font-bold">Rs. 2,500</span></li>
                        <li>• Other than NIT Jalandhar: <span className="font-bold">Rs. 3,000</span> <span className="text-xs text-gray-500">(incl. GST @18%)</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Industry Participants</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Registration Fee: <span className="font-bold">Rs. 3,500</span> <span className="text-xs text-gray-500">(incl. GST @18%)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-left">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The registration fee includes all the instructional materials, internet facility, lunch (3 days) and refreshments. The boarding and lodging will be provided on payment basis subjected to availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No slideshow controls for static hero image */}
    </>
  );
}