import React, { useState } from 'react';

const ObjectivesConference = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const objectives = [
    "To provide a platform for researchers, scientists, and industry experts to present innovations in net-zero energy technologies.",
    "To discuss challenges, policy frameworks, and research directions required for India's energy transition.",
    "To encourage collaboration between academic institutions and industry stakeholders in the domain of sustainable energy.",
    "To showcase emerging technologies in renewable energy, energy storage, smart grids, hydrogen systems, and carbon-neutral infrastructures.",
    "To promote interdisciplinary learning and capacity-building among students, research scholars, and professionals."
  ];

  const tracks = [
    {
      id: 'A',
      title: 'Renewable Energy Systems',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-500',
      topics: [
        'Solar PV, CSP, and hybrid renewable technologies',
        'Wind energy forecasting, resource assessment, and turbine control',
        'Bioenergy, biomass gasification, and waste-to-energy solutions',
        'Renewable energy converters, controllers, and power electronics interfaces',
        'Hybridization strategies for maximizing renewable penetration',
        'Techno-economic feasibility and performance evaluation of renewable plants',
        'Grid integration challenges under high renewable penetration'
      ]
    },
    {
      id: 'B',
      title: 'Energy Storage and Flexible Resources',
      icon: '🔋',
      color: 'from-green-400 to-emerald-600',
      topics: [
        'Battery storage systems: Li-ion, flow batteries, sodium-based technologies',
        'Pumped hydro storage and mechanical storage systems',
        'Thermal energy storage technologies and applications',
        'Vehicle-to-grid (V2G) and distributed demand-side flexibility',
        'Storage system modelling, degradation, lifecycle and cost analysis',
        'Optimization of storage for reliability, frequency regulation, and ancillary services',
        'Grid-level storage planning and multi-objective scheduling'
      ]
    },
    {
      id: 'C',
      title: 'Smart Grids and Digital Energy Platforms',
      icon: '🌐',
      color: 'from-blue-400 to-indigo-600',
      topics: [
        'Smart metering, AMI, and IoT-enabled energy management',
        'AI/ML-based forecasting, optimization, and predictive maintenance',
        'Digital twins for power system design, planning, and operation',
        'Advanced distribution automation and DER coordination',
        'Cybersecurity, data privacy, and secure communication protocols',
        'Grid monitoring, real-time data analytics, and decision support tools',
        'ICT-enabled resilience solutions for renewable-rich grids'
      ]
    },
    {
      id: 'D',
      title: 'Microgrids and Distributed Energy Systems',
      icon: '⚡',
      color: 'from-purple-400 to-pink-600',
      topics: [
        'AC, DC, and hybrid microgrid architectures and control',
        'Optimal dispatch, planning, and real-time microgrid energy management',
        'Microgrid protection, fault detection, and coordination',
        'Islanding detection, resynchronization, and black-start strategies',
        'Community microgrids, campus microgrids, and rural electrification',
        'Integration of distributed renewable energy and storage systems',
        'Microgrid economics, interoperability standards, and business models'
      ]
    },
    {
      id: 'E',
      title: 'Power System Planning and Operation for Net-Zero',
      icon: '🏭',
      color: 'from-red-400 to-rose-600',
      topics: [
        'Capacity expansion planning and resource adequacy assessments',
        'Optimal power flow, unit commitment, and renewable-rich grid operation',
        'Frequency stability, voltage stability, and system resilience challenges',
        'Integration of inverter-based resources (IBRs) and advanced protection',
        'Ancillary services, dynamic reactive power support, and flexibility needs',
        'Reliability modelling, EMS/SCADA optimization, and contingency analysis',
        'Market-driven operational strategies for net-zero grids'
      ]
    },
    {
      id: 'F',
      title: 'Hydrogen and Novel Energy Carriers',
      icon: '💧',
      color: 'from-cyan-400 to-blue-600',
      topics: [
        'Green hydrogen production, electrolyzer technologies, and efficiency modelling',
        'Hydrogen storage, transportation, and safety considerations',
        'Fuel cells, hydrogen microgrids, and hybrid hydrogen-renewable systems',
        'Sector coupling: power-to-hydrogen and hydrogen-to-power pathways',
        'Techno-economic analysis of hydrogen value chains',
        'Use of ammonia, methanol, and synthetic fuels as energy carriers',
        'Integration challenges for hydrogen in industrial and energy systems'
      ]
    },
    {
      id: 'G',
      title: 'Policies, Markets, and Regulatory Frameworks',
      icon: '📊',
      color: 'from-amber-400 to-orange-600',
      topics: [
        'Carbon pricing, carbon markets, carbon credits, and REC mechanisms',
        'Regulatory frameworks for transmission and distribution modernization',
        'Market mechanisms for flexibility, ancillary services, and renewable integration',
        'Energy transition policies, net-zero roadmaps, and sustainability assessments',
        'Tariff design, DISCOM reforms, and financial sustainability',
        'Policy impact analysis and socio-economic dimensions of net-zero systems',
        'Energy justice, affordability, and equitable energy transitions'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Objectives Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Conference <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Objectives</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advancing India's journey towards net-zero energy systems through research, innovation, and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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

        {/* Research Tracks Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Tracks</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Submit your research under any of the following tracks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
              >
                {/* Track Header */}
                <div className={`bg-gradient-to-br ${track.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 text-5xl opacity-20">
                    {track.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{track.icon}</span>
                      <span className="text-2xl font-bold">Track {track.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span>{track.topics.length} Topics</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${activeTrack === track.id ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Track Topics (Expandable) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTrack === track.id ? 'max-h-[600px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Research Topics:</h4>
                    <ul className="space-y-3">
                      {track.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View Details Button (when collapsed) */}
                {activeTrack !== track.id && (
                  <div className="p-4 bg-gray-50 text-center">
                    <span className="text-sm text-gray-600 font-medium">Click to view topics</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          
            </div>
          </div>
        </div>
  );
};

export default ObjectivesConference;