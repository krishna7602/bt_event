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
        style={{ backgroundImage: "linear-gradient(to bottom, rgb(15 23 42), rgb(30 41 59))" }}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-9">
              <div className="flex items-center gap-8 mb-10">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-green-500 overflow-hidden shadow-lg">
                  <img src={logo} alt="RICE-WVES 2026 Logo" className="w-full h-full object-contain p-2" />
                </div>

                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                    <span className="block text-white">{hero.titlePrefix || "National Conference on"}</span>
                    <span className="block text-green-400">{hero.titleHighlight || "Net-Zero Energy Systems"}</span>
                  </h1>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500 rounded-full text-sm md:text-base font-semibold text-green-200">
                      {hero.badge || "Hybrid Mode"}
                    </span>
                    <p className="text-lg text-gray-300 max-w-3xl">
                      {hero.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white text-gray-800 rounded-xl p-5 inline-block shadow-lg mb-8">
                <p className="text-lg font-semibold">
                  {hero.dateLabel || "Date"}: <span className="text-green-600">{hero.dateValue || "12-13 June, 2026"}</span>
                </p>
                {hero.notice ? <p className="text-sm text-red-500 font-medium mt-1">{hero.notice}</p> : null}
              </div>

              <p className="text-xl text-gray-200 max-w-4xl">
                {hero.tagline}
              </p>
              {/* <div className="mt-6">
                <a
                  href={hero.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
                >
                  See Brochure
                </a>
              </div> */}
            </div>

            <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
              <div className="w-full max-w-56">
                <h3 className="text-4xl text-green-400 font-extrabold mb-6 text-right">Sponsors</h3>
                <div className="space-y-6">
                  {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="flex items-center gap-4 rounded-2xl p-3 bg-white/5 border border-white/5">
                      <div className="w-28 h-16 rounded-md flex items-center justify-center bg-white/5 p-2">
                        <img src={sponsor.imageUrl} alt={sponsor.name} className="max-h-12 object-contain" />
                      </div>
                      <div className="flex-1 text-right">
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
                  <p className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-200 backdrop-blur">{currentImage.caption}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="fees" className="w-full py-12 text-gray-800">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
              <div className="bg-blue-900 py-6 px-8">
                <h3 className="text-2xl font-bold text-white text-left">Registration Fee Structure</h3>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category 1 */}
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-4">Students & Research Scholars</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• From NIT Jalandhar: <span className="font-bold">Rs. 1,500</span></li>
                        <li>• Other than NIT Jalandhar: <span className="font-bold">Rs. 2,000</span> <span className="text-xs text-gray-500">(incl. GST @18%)</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-4">Faculty Members</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• From NIT Jalandhar: <span className="font-bold">Rs. 2,500</span></li>
                        <li>• Other than NIT Jalandhar: <span className="font-bold">Rs. 3,000</span> <span className="text-xs text-gray-500">(incl. GST @18%)</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-lg font-bold text-blue-900 mb-4">Industry Participants</h4>
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