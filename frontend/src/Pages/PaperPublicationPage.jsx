import React from "react";
import biofprCover from "../assets/paper_publication_theme/Picture1.jpg";
import ijseCover from "../assets/images.jpg";
import biomassFuturesCover from "../assets/X30514444.jpg.jpeg";

const journals = [
  {
    id: 1,
    name: "Biofuels, Bioproducts and Biorefining (Biofpr)",
    image: biofprCover,
    publisher: "SCI, Wiley",
    impactFactor: "3.8",
    siTitle: "Circular Bioeconomy for Environmental Sustainability",
    scope: [
      "Feedstock design and production",
      "Biomass treatment and conversion",
      "Separation and process technology",
      "Industrial development",
    ],
    website: "https://scijournals.onlinelibrary.wiley.com/journal/19321031",
    specialIssue: {
      openDate: "December 1, 2026",
      closeDate: "March 31, 2027",
    },
  },
  {
    id: 2,
    name: "International Journal of Sustainable Energy",
    image: ijseCover,
    publisher: "Taylor & Francis",
    impactFactor: "4.2",
    siTitle:
      "Recent Innovations in Waste Valorization for Sustainable Energy: Technological Advances, Circularity, and Life-Cycle Perspectives",
    scope: [
      "Waste-to-Energy Technologies",
      "Bioenergy and Biofuel",
      "Energy Recovery from Wastewater",
      "Life-Cycle Assessment",
      "Environmental Sustainability",
    ],
    website:
      "https://think.taylorandfrancis.com/article_collections/international-journal-of-sustainable-energy-recent-innovations-in-waste-valorization-for-sustainable-energy-technological-advances-circularity-and-life-cycle-perspectives/",
    specialIssue: {
      closeDate: "July 31, 2027",
    },
  },
  {
    id: 3,
    name: "Biomass Futures",
    image: biomassFuturesCover,
    publisher: "Elsevier",
    siTitle: "RICE-WVES",
    scope: [
      "Biomass Characterization, Pretreatment and Conversion Technologies",
      "Biochar Production, Activation and Applications",
      "Energy, Materials, and Chemicals",
      "Decarbonization Technologies",
      "Emerging Technologies",
    ],
    website: "https://www.sciencedirect.com/journal/biomass-futures",
    specialIssue: {
      closeDate: "April 01, 2027",
    },
  },
];

const PaperPublication = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
            Paper{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Publication
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Selected high-quality research papers presented at the conference
            (RICE-WVES 2026) will be invited for submission to prestigious
            international journals. Authors of accepted abstracts will have the
            opportunity to submit full manuscripts for consideration in the
            following publications. All submitted manuscripts will undergo the
            journals' rigorous peer-review process.
          </p>
        </div>

        {/* Journal Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {journals.map((journal) => (
            <div
              key={journal.id}
              className="group bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-[340px] flex flex-col"
            >
              {/* Journal Cover Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 p-4 flex items-center justify-center h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {journal.image ? (
                  <img
                    src={journal.image}
                    alt={journal.name}
                    className="h-full w-auto object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full group-hover:scale-105 transition-transform duration-500">
                    <svg className="w-16 h-16 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-semibold text-blue-500 text-center px-4">{journal.name}</span>
                  </div>
                )}
              </div>

              {/* Journal Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                  {journal.name}
                </h3>

                <div className="space-y-2.5 text-sm text-gray-700 mb-4">
                  <p>
                    <span className="font-semibold text-gray-900">
                      Publisher:
                    </span>{" "}
                    {journal.publisher}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">
                      Impact Factor:
                    </span>{" "}
                    {journal.impactFactor}
                  </p>
                  {journal.siTitle && (
                    <p>
                      <span className="font-semibold text-gray-900">
                        SI Title:
                      </span>{" "}
                      {journal.siTitle}
                    </p>
                  )}
                </div>

                {/* Scope */}
                {journal.scope && journal.scope.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1.5">
                      Scope:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-1">
                      {journal.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Website Link */}
                <p className="text-sm mb-4">
                  <span className="font-semibold text-gray-900">Website:</span>{" "}
                  <a
                    href={journal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                  >
                    Visit Journal
                  </a>
                </p>

                {/* Special Issue Box */}
                {journal.specialIssue && (
                  <div className="mt-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-amber-500 text-lg">✦</span>
                      <span className="font-bold text-gray-900 text-sm">
                        Special Issue
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {journal.specialIssue.openDate ? (
                        <>
                          Special issue opens on{" "}
                          <span className="font-semibold text-gray-800">
                            {journal.specialIssue.openDate}
                          </span>{" "}
                          and closes on{" "}
                          <span className="font-semibold text-gray-800">
                            {journal.specialIssue.closeDate}
                          </span>
                        </>
                      ) : (
                        <>
                          Special issue closes on{" "}
                          <span className="font-semibold text-gray-800">
                            {journal.specialIssue.closeDate}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-base text-gray-600">
            For more information about publication opportunities, please
            contact:{" "}
            <a
              href="mailto:ricewves@nitj.ac.in"
              className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors"
            >
              ricewves@nitj.ac.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaperPublication;