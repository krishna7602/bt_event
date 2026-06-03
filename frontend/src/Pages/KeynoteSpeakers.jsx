import React from "react";
import { useSiteConfig } from "../context/SiteConfigContext";

const SpeakerCard = ({ speaker, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mb-12`}>
      {/* Photo Column */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-inner">
          {speaker.photo ? (
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-500 text-5xl font-bold">
              {speaker.name?.charAt(0) ?? "S"}
            </div>
          )}
        </div>
      </div>

      {/* Info Column */}
      <div className="flex-grow text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{speaker.name}</h3>
          <p className="text-blue-600 font-semibold text-lg">({speaker.institute})</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 font-medium">{speaker.designation}</p>
          <p className="text-gray-500 italic">{speaker.department}</p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600/30 rounded-full hidden md:block"></div>
          <p className="text-gray-700 leading-relaxed text-justify md:pl-4 mb-4">
            {speaker.bio}
          </p>
          {speaker.link && (
            <div className="md:pl-4">
              <a
                href={speaker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
              >
                View Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const KeynoteSpeakers = () => {
  const { config, loading } = useSiteConfig();
  const speakers = config?.keynoteSpeakers ?? [];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen px-4 md:px-8 lg:px-12">
      <div className="w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block px-8 py-3 bg-blue-900 text-white text-3xl md:text-4xl font-bold rounded-lg shadow-xl mb-4 transform -skew-x-6">
            Keynote Speakers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Speakers List */}
            <div className="space-y-16">
              {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={index}
                  speaker={speaker}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>

            {/* Note Section */}
            <div className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
              <p className="text-blue-800 text-sm italic">
                * More speakers to be announced soon. Stay tuned for updates.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
