import React from "react";
import anupShuklaPhoto from '../assets/anup_shukla.jpg';
import ashaSharmaPhoto from '../assets/asha_sharma.jpg';

const keynoteSpeakers = [
  {
    name: "Dr. Anup Shukla",
    institute: "IIT JAMMU",
    designation: "Associate Professor",
    department: "Department of Electrical Engineering",
    photo: anupShuklaPhoto,
    bio: "Dr. Anup Shukla (Senior Member IEEE, Power and Energy Society, Industry Applications Society, IEEE Young Professionals). From June 2016 to Dec 2016, He was with the Department of Electrical Engineering, Indian Institute of Technology Kanpur as Senior Project Engineer. From Jan 2017 to Aug. 2017, He was with the Department of Electrical Engineering and Computer Science Engineering, Howard University, USA as post-doctorate. He is currently working as Visiting Faculty at Loughborough University from October 2023 to April 2024. He is currently working as an Associate Professor with the Department of Electrical Engineering, Indian Institute of Technology Jammu, India. He was the recipient of POSOCO Power System Award, 2017 and Dr. P.S. Nigam Power Sector Award, 2013."
  },
  {
    name: "Dr. Asha Sharma",
    institute: "IIT ROORKEE",
    designation: "Assistant Professor",
    department: "Department of Electrical Engineering",
    photo: ashaSharmaPhoto,
    bio: "Dr. Asha Sharma is an Assistant Professor in the Electrical Engineering Department at the Indian Institute of Technology Roorkee. Her research interests include high voltage engineering, insulation systems, dielectric materials, and power system applications. She is actively involved in teaching undergraduate and postgraduate courses in electrical engineering and supervises research students at the M.Tech and Ph.D. levels. Dr. Sharma has received several honours and awards for her academic and research contributions and has published research papers in reputed international journals and conferences. She also participates in professional and academic activities related to electrical engineering education and research."
  }
];

const SpeakerCard = ({ speaker, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mb-12`}>
      {/* Photo Column */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-inner">
          <img 
            src={speaker.photo} 
            alt={speaker.name} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
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
          <p className="text-gray-700 leading-relaxed text-justify md:pl-4">
            {speaker.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

const Speakerspage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block px-8 py-3 bg-blue-900 text-white text-3xl md:text-4xl font-bold rounded-lg shadow-xl mb-4 transform -skew-x-6">
            Key Note Speakers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Speakers List */}
        <div className="space-y-16">
          {keynoteSpeakers.map((speaker, index) => (
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
      </div>
    </section>
  );
};

export default Speakerspage;
