import React, { useState } from "react";

const speakersData = [
  {
    name: "Dr. Rajeev Kumar Singh",
    designation: "Professor",
    department: "Department of Electrical Engineering, IIT BHU",
    specialization: "Electrical Engineering",
    photo: "https://ui-avatars.com/api/?name=Rajeev+Kumar+Singh&background=0D8ABC&color=fff",
    details:
      "Area of Interest: Energy Storage Systems, Bidirectional Battery Chargers, Power Electronics for Hybrid AC/DC Micro-grids, EV/PHEV interfaces, modeling and control of power converters.",
    link: "https://scholar.google.com/citations?hl=en&user=5iNPd5wAAAAJ",
  },
  {
    name: "Dr. Satyabrata Jit",
    designation: "Professor",
    department: "Department of Electronics Engineering, IIT BHU",
    specialization: "Electronics Engineering",
    photo: "https://ui-avatars.com/api/?name=Satyabrata+Jit&background=0D8ABC&color=fff",
    details:
      "Research interests include CMOS device modeling, thin-film photodetectors, organic solar cells, nanoelectronics, gas and biosensors.",
  },
  {
    name: "Dr. Ranjan Kumar Behera",
    designation: "Associate Professor",
    department: "Department of Electrical Engineering, IIT Patna",
    specialization: "Electrical Engineering",
    photo: "https://ui-avatars.com/api/?name=Ranjan+Kumar+Behera&background=0D8ABC&color=fff",
    details:
      "Research areas include power electronics, motor drives, renewable energy systems, and electric vehicle technologies.",
  },
  {
    name: "Dr. Sanjoy Kumar Parida",
    designation: "Professor",
    department: "Electrical Engineering",
    specialization: "Electrical Engineering",
    photo: "https://ui-avatars.com/api/?name=Sanjoy+Kumar+Parida&background=0D8ABC&color=fff",
    details:
      "Expertise in power systems, motor control design and optimization.",
  },
  {
    name: "Dr. Saurabh Kumar Pandey",
    designation: "Associate Professor",
    department: "IIT Patna",
    specialization: "Electrical Engineering",
    photo: "https://ui-avatars.com/api/?name=Saurabh+Kumar+Pandey&background=0D8ABC&color=fff",
    details:
      "Research interests include optoelectronic devices, semiconductor thin films, photovoltaics, MEMS, VLSI device modeling.",
  },
  {
    name: "Dr. PESN Raju",
    designation: "Assistant Professor",
    department: "Department of Energy Science and Engineering, IIT Guwahati",
    specialization: "Energy Science",
    photo: "https://ui-avatars.com/api/?name=PESN+Raju&background=0D8ABC&color=fff",
    details:
      "Focus on renewable energy systems, energy storage technologies, power electronics, and sustainable energy solutions.",
  },
  {
    name: "Dr. Avanish Tripathi",
    designation: "Assistant Professor",
    department: "Department of Energy Science and Engineering, IIT Delhi",
    specialization: "Energy Science",
    photo: "https://ui-avatars.com/api/?name=Avanish+Tripathi&background=0D8ABC&color=fff",
    details:
      "Research includes EV charging infrastructure, grid-connected converters, wind & solar power, and power electronics.",
  },
  {
    name: "Dr. Sukanta Halder",
    designation: "Assistant Professor",
    department: "Department of Electrical Engineering, IIT Dhanbad",
    specialization: "Electrical Engineering",
    photo: "https://ui-avatars.com/api/?name=Sukanta+Halder&background=0D8ABC&color=fff",
    details:
      "Research in EVs, PMSM drives, intelligent BMS, ML-based motor control, SiC/GaN inverters, hydrogen fuel cell HEVs.",
  },
  {
    name: "Dr. Vivek Garg",
    designation: "Assistant Professor",
    department: "ECE Department, SVNIT Surat",
    specialization: "Electronics Engineering",
    photo: "https://ui-avatars.com/api/?name=Vivek+Garg&background=0D8ABC&color=fff",
    details:
      "Expertise in optoelectronics, quantum technologies, nanoscale device modeling, energy storage, optical communication.",
  },
  {
    name: "Dr. Brajendra Singh Sengar",
    designation: "Assistant Professor",
    department: "ECE Department, NIT Srinagar",
    specialization: "Electronics Engineering",
    photo: "https://ui-avatars.com/api/?name=Brajendra+Singh+Sengar&background=0D8ABC&color=fff",
    details:
      "Research in semiconductor device simulation, thin-film solar cells, and ML-based semiconductor devices.",
  },
  {
    name: "Dr. Gaurav Siddharth",
    designation: "Assistant Professor",
    department: "ECE Department, NIT Calicut",
    specialization: "Electronics Engineering",
    photo: "https://ui-avatars.com/api/?name=Gaurav+Siddharth&background=0D8ABC&color=fff",
    details:
      "Research focuses on modeling, characterization, and fabrication of optoelectronic devices and solar cells.",
  },
  {
    name: "Sanjay Kumar",
    designation: "DST-Inspire Faculty",
    department: "Department of Electronics Engineering, IIT(ISM) Dhanbad",
    specialization: "Electronics Engineering",
    photo: "https://ui-avatars.com/api/?name=Sanjay+Kumar&background=0D8ABC&color=fff",
    details:
      "Research on non-volatile memory devices, memristors, neuromorphic computing, 2D materials, and gas sensors.",
  },
  {
    name: "Dr. Saurabh Dutta",
    designation: "Research Associate",
    department: "High Voltage Lab, University of Manchester, UK",
    specialization: "High Voltage Engineering",
    photo: "https://ui-avatars.com/api/?name=Saurabh+Dutta&background=0D8ABC&color=fff",
    details:
      "Research in high voltage engineering, power system protection, and renewable energy integration.",
  },
];

const Speakerspage = () => {
  const [search, setSearch] = useState("");

  const filteredSpeakers = speakersData.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(search.toLowerCase()) ||
      speaker.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Speakers</h2>
        <p className="text-gray-600 mb-6">
          Showing {filteredSpeakers.length} of {speakersData.length} speakers
        </p>

        <input
          type="text"
          placeholder="Search speakers, specializations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 mb-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Photo */}
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold text-center text-gray-800">
                {speaker.name}
              </h3>

              <p className="text-sm text-center text-gray-600">
                {speaker.designation}
              </p>

              <p className="text-sm text-center text-gray-600 mb-2">
                {speaker.department}
              </p>

              <div className="text-center mb-3">
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {speaker.specialization}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3 text-center">
                {speaker.details}
              </p>

              {speaker.link && (
                <div className="text-center">
                  <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Google Scholar Profile
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakerspage;
