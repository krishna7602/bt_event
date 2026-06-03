import React from 'react';

const ObjectivesConference = () => {
  const objectives = [
    "To provide a platform for researchers, scientists, and industry experts to present innovations in waste valorization and circular economy.",
    "To promote technologies for resource recovery, bioeconomy, and sustainable waste management.",
    "To encourage interdisciplinary collaboration between academia, industry, and policymakers.",
    "To support capacity building for students, research scholars, and professionals in environmental sustainability."
  ];

  const thematicAreas = [
    {
      id: '1',
      title: 'Waste Valorization Technologies',
      icon: '♻️',
      color: 'from-emerald-400 to-teal-600',
      topics: [
        'Conversion of municipal solid waste into value-added products',
        'Biomass and agricultural waste utilization',
        'Plastic waste recycling and upcycling'
      ]
    },
    {
      id: '2',
      title: 'Energy Recovery from Waste',
      icon: '⚡',
      color: 'from-amber-400 to-orange-600',
      topics: [
        'Waste-to-energy technologies',
        'Biogas and biofuel production',
        'Pyrolysis, gasification, and incineration innovations',
        'Hydrogen generation from waste streams',
        'Renewable energy integration with waste processing'
      ]
    },
    {
      id: '3',
      title: 'Water, Wastewater, and Sludge Management',
      icon: '💧',
      color: 'from-cyan-400 to-blue-600',
      topics: [
        'Wastewater treatment and reuse',
        'Nutrient recovery from sludge',
        'Circular water economy approaches',
        'Innovative membrane and bio-treatment technologies'
      ]
    },
    {
      id: '4',
      title: 'Bioeconomy and Biorefinery Approaches',
      icon: '🌱',
      color: 'from-green-400 to-emerald-600',
      topics: [
        'Bioconversion of organic waste',
        'Composting and vermicomposting innovations',
        'Bio-based materials and bioplastics',
        'Microbial and enzymatic valorization',
        'Integrated biorefinery systems'
      ]
    },
    {
      id: '5',
      title: 'Emerging Technologies for Circular Economy',
      icon: '🤖',
      color: 'from-purple-400 to-indigo-600',
      topics: [
        'Artificial intelligence and machine learning in waste management',
        'IoT-enabled smart waste monitoring',
        'Blockchain for waste traceability',
        'Digital twins for sustainable systems',
        'Industry 4.0 applications in circular economy'
      ]
    },
    {
      id: '6',
      title: 'Climate Change Mitigation and Environmental Protection',
      icon: '🌍',
      color: 'from-teal-400 to-sky-600',
      topics: [
        'Circular economy pathways for climate resilience',
        'Carbon capture, utilization, and storage (CCUS)',
        'Pollution prevention and control',
        'Ecosystem restoration and conservation',
        'Sustainable urban development'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 md:px-8 lg:px-12 text-justify">
      <div className="w-full max-w-7xl mx-auto">
        {/* Objectives Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Objectives</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advancing recent innovations in circular economy for waste valorisation and environmental sustainability through research, innovation, and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    {objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thematic Areas Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Thematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Areas</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Submit your research under any of the following thematic areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thematicAreas.map((area) => (
              <div 
                key={area.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${area.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 text-5xl opacity-20">
                    {area.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl p-1 bg-white/20 rounded-xl backdrop-blur-sm">{area.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug">{area.title}</h3>
                  </div>
                </div>

                {/* Topics List */}
                <div className="p-6 bg-white flex-grow">
                  <ul className="space-y-4">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                          <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed font-medium text-left">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesConference;