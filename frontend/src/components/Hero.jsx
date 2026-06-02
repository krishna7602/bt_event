import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteConfig } from "../context/SiteConfigContext";
import { defaultSiteConfig } from "../config/defaultSiteConfig";
import logo from "../assets/logo.png";
import track1Img from "../assets/track_1_renewable.png";
import track2Img from "../assets/track_2_smartgrids.png";
import track3Img from "../assets/track_3_multienergy.png";
import track4Img from "../assets/track_4_policy.png";
import track5Img from "../assets/track_5_intelligent.png";
import track6Img from "../assets/track_6_ev.jpg";

const defaultSlides = [
  { url: track1Img, caption: "Track 1: Renewable Energy and Storage Systems" },
  { url: track2Img, caption: "Track 2: Smart Grids, Digital Energy Platforms and Microgrids" },
  { url: track3Img, caption: "Track 3: Multi-Energy Systems and Net-Zero Integration" },
  { url: track4Img, caption: "Track 4: Energy Policy, Markets, and Regulatory Frameworks" },
  { url: track5Img, caption: "Track 5: Intelligent Systems and Optimization for Net-Zero Energy Systems Hybrid Mode" },
  { url: track6Img, caption: "Track 6: Electric Vehicles and E-Mobility Systems" },
];

export default function Hero() {
  const { config } = useSiteConfig();
  const hero = config.hero || defaultSiteConfig.hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = hero.carouselImages?.length ? hero.carouselImages : defaultSlides;
  const sponsors = hero.sponsors?.length ? hero.sponsors : defaultSiteConfig.hero.sponsors;

  useEffect(() => {
    if (carouselImages.length < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((previous) => (previous - 1 + carouselImages.length) % carouselImages.length);
  };

  const currentImage = carouselImages[currentSlide] || carouselImages[0];

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
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-green-500 overflow-hidden">
                  <img src={logo} alt="NZES-2026 Logo" className="w-full h-full object-contain p-2" />
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    {hero.titlePrefix || "National Conference on"}
                    <span className="text-green-400 flex flex-wrap items-center gap-x-4">
                      {hero.titleHighlight || "Net-Zero Energy Systems"}
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500 rounded-full text-base md:text-2xl font-bold -translate-y-0.5">
                        {hero.badge || "Hybrid Mode"}
                      </span>
                    </span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-3xl">
                    {hero.description}
                  </p>
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
              <div className="mt-6">
                <a
                  href={hero.brochureUrl || config.site?.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
                >
                  See Brochure
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
              <div className="w-full max-w-52 flex flex-col items-center text-center">
                <p className="text-green-400 text-4xl md:text-5xl font-bold leading-tight mb-3">Sponsors</p>
                <div className="flex flex-col gap-6 items-center">
                  {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="flex flex-col items-center gap-2">
                      <div className="w-40 h-24 md:w-44 md:h-28 rounded-lg flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <img src={sponsor.imageUrl} alt={sponsor.name} className="w-full h-full object-contain" />
                      </div>
                      <p className="text-gray-300 text-sm font-medium text-center">{sponsor.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="grid gap-0 lg:grid-cols-[1.8fr_1fr]">
              <div className="relative bg-slate-950" style={{ minHeight: 320 }}>
                <img src={currentImage.url} alt={currentImage.caption} className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to top, rgb(2 6 23), rgba(2, 6, 23, 0.25), transparent)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-200 backdrop-blur">{currentImage.caption}</p>
                </div>
                <div className="absolute left-5 top-5 flex gap-2">
                  <button type="button" onClick={prevSlide} className="rounded-full bg-black/40 p-3 text-white backdrop-blur hover:bg-black/60">
                    <ChevronLeft size={20} />
                  </button>
                  <button type="button" onClick={nextSlide} className="rounded-full bg-black/40 p-3 text-white backdrop-blur hover:bg-black/60">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 text-slate-900 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-700">Conference Notes</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">Registration fee update</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  The organizing committee has decided to reduce the registration fee for B.Tech students to Rs 500 + GST (18%) = Rs 590/-.
                  The first author must be a B.Tech student, and both registration and presentation must be completed by the same student.
                </p>
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                  Upload the student ID card and payment slip as a single PDF during registration.
                </div>
                <div className="mt-6 space-y-3">
                  {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                      <img src={sponsor.imageUrl} alt={sponsor.name} className="h-10 w-10 rounded-full object-contain" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{sponsor.name}</p>
                        <p className="text-xs text-slate-500">Sponsor profile</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="fees" className="w-full py-12">
            <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50/90 p-5 shadow-sm">
              <p className="text-sm md:text-base leading-7 text-gray-800">
                <span className="font-bold text-gray-900">Important:</span> The organizing committee has decided to reduce the Registration Fee <span className="font-bold bg-amber-200 px-1.5 py-0.5 rounded">Rs 500 + GST (18%) = Rs 590/-</span> <span className="font-bold bg-yellow-200 px-1.5 py-0.5 rounded">only for B.Tech students</span>. In this case, it is <span className="font-bold bg-amber-200 px-1.5 py-0.5 rounded">mandatory</span> that first author should be B.Tech student, and the registration &amp; presentation should be done only by the same B.Tech student. At the time of registration, the B.Tech students have to upload their id card (as a proof of students) along with payment slip in a single pdf file.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-8">
              <div className="bg-blue-900 py-6 px-8">
                <h3 className="text-2xl font-bold text-white">Registration Fee Structure</h3>
              </div>

              <div className="overflow-x-auto p-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800 text-center font-bold">
                      <th className="px-5 py-4 text-left border border-gray-200" rowSpan="2">Category</th>
                      <th className="px-5 py-3 border border-gray-200" colSpan="2">Online Participants</th>
                      <th className="px-5 py-3 border border-gray-200" colSpan="2">Offline Participants</th>
                    </tr>
                    <tr className="bg-gray-200 text-gray-600 text-center text-xs uppercase font-bold">
                      <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                      <th className="px-5 py-2 border border-gray-200">For Every Additional Paper</th>
                      <th className="px-5 py-2 border border-gray-200">1st Paper</th>
                      <th className="px-5 py-2 border border-gray-200">For Every Additional Paper</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Students (from NITJ)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /-</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                    </tr>
                    <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Students (Other than NITJ)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 2000 /- + GST<br /><span className="text-xs text-gray-500">=2360</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br /><span className="text-xs text-gray-500">=1180 (2nd Paper Free)</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /- + GST<br /><span className="text-xs text-gray-500">=2950</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br /><span className="text-xs text-gray-500">=1180 (2nd paper Free)</span></td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Faculties (from NITJ)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 2500 /-</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                    </tr>
                    <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Faculties (Other than NITJ)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 3000 /- + GST<br /><span className="text-xs text-gray-500">=3540</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br /><span className="text-xs text-gray-500">=1180</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br /><span className="text-xs text-gray-500">=4130</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1000 /- + GST<br /><span className="text-xs text-gray-500">=1180</span></td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Industrial Persons</td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 3500 /- + GST<br /><span className="text-xs text-gray-500">=4130</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br /><span className="text-xs text-gray-500">=1770</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 4500 /- + GST<br /><span className="text-xs text-gray-500">=5310</span></td>
                      <td className="px-5 py-4 text-center border border-gray-200">Rs. 1500 /- + GST<br /><span className="text-xs text-gray-500">=1770</span></td>
                    </tr>
                    <tr className="bg-blue-100 hover:bg-blue-200 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Students (International)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                      <td className="px-5 py-4 text-center text-green-700 font-semibold border border-gray-200">Free</td>
                    </tr>
                    <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                      <td className="px-5 py-4 font-medium border border-gray-200">Faculties (International)</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 100</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 125</td>
                      <td className="px-5 py-4 text-center border border-gray-200">USD 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 hidden rounded-full bg-slate-900/80 p-2 text-white shadow-lg backdrop-blur md:flex">
        <button type="button" onClick={prevSlide} className="rounded-full p-2 hover:bg-white/10">
          <ChevronLeft size={20} />
        </button>
        <button type="button" onClick={nextSlide} className="rounded-full p-2 hover:bg-white/10">
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}