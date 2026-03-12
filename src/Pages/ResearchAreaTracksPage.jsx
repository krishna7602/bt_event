import React, { useState } from 'react';

const ResearchAreaTracksPage = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: '1',
      title: 'Renewable Energy and Storage Systems',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-500',
      topics: [
        'Solar PV, CSP, wind, bioenergy, biomass gasification, and hybrid renewable systems',
        'Renewable resource assessment, forecasting, and performance analysis',
        'Renewable energy converters and advanced power electronics interfaces',
        'Hybrid renewable–storage configurations and system design',
        'Battery energy storage systems (Li-ion, flow, sodium-based, and emerging technologies)',
        'Pumped hydro, mechanical, and thermal energy storage solutions',
        'Storage degradation modelling, lifecycle assessment, and techno-economic evaluation'
      ]
    },
    {
      id: '2',
      title: 'Smart Grids, Digital Energy Platforms and Microgrids',
      icon: '🌐',
      color: 'from-blue-400 to-indigo-600',
      topics: [
        'Smart metering, AMI, and IoT-enabled energy management systems',
        'AI/ML-based forecasting, predictive maintenance, and grid analytics',
        'Digital twins and data-driven planning and operation',
        'Distribution automation and Distributed Energy Resource (DER) coordination',
        'Cybersecurity, data privacy, and secure communication protocols',
        'AC/DC/hybrid microgrid architectures and control strategies',
        'Real-time microgrid energy management, protection, and resiliency solutions'
      ]
    },
    {
      id: '3',
      title: 'Multi-Energy Systems and Net-Zero Integration',
      icon: '🏭',
      color: 'from-green-400 to-emerald-600',
      topics: [
        'Integrated planning and operation of multi-energy systems',
        'Capacity expansion and resource adequacy for net-zero pathways'
      ]
    },
    {
      id: '4',
      title: 'Energy Policy, Markets, and Regulatory Frameworks',
      icon: '📊',
      color: 'from-amber-400 to-orange-600',
      topics: [
        'Carbon pricing, carbon markets, and Renewable Energy Certificate (REC) mechanisms',
        'Market design for flexibility, ancillary services, and clean energy integration',
        'Regulatory reforms for transmission and distribution modernization',
        'Energy transition strategies and net-zero roadmaps',
        'Tariff design and financial sustainability of power utilities',
        'Socio-economic and policy impact assessment of energy transition initiatives'
      ]
    },
    {
      id: '5',
      title: 'Intelligent Systems and Optimization for Net-Zero Energy Systems',
      icon: '🧠',
      color: 'from-purple-400 to-pink-600',
      topics: [
        'AI-driven modelling, forecasting, and optimization for net-zero systems',
        'Intelligent energy management for renewable-rich grids',
        'Machine learning and deep learning applications in low-carbon power systems',
        'Multi-agent systems for distributed energy coordination and demand response',
        'Reinforcement learning for real-time energy system control',
        'Meta-heuristic and evolutionary optimization for planning and scheduling',
        'Data-driven decision-support tools for carbon reduction and system resilience'
      ]
    },
    {
      id: '6',
      title: 'Electric Vehicles and E-Mobility Systems',
      icon: '🚗',
      color: 'from-cyan-400 to-blue-600',
      topics: [
        'Electric vehicle powertrains and drivetrain technologies',
        'EV battery technologies, Battery Management Systems (BMS), and lifecycle analysis',
        'Charging infrastructure: AC/DC fast charging and smart charging strategies'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-6">
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
        </div>
      </div>
    </div>
  );
};

export default ResearchAreaTracksPage;
