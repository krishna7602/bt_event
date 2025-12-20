import React from "react";
import { MapPin, Plane, Train, Bus } from "lucide-react";

export default function Venue() {
  const connections = [
    {
      icon: <Plane className="w-6 h-6 text-blue-600" />,
      distance: "12 km from Jai Prakash Narayan International Airport"
    },
    {
      icon: <Train className="w-6 h-6 text-blue-600" />,
      distance: "8 km from Patna Junction Railway Station"
    },
    {
      icon: <Bus className="w-6 h-6 text-blue-600" />,
      distance: "Easily accessible by city buses and local transport"
    }
  ];

  const attractions = [
    "Mahabodhi Temple",
    "Ruins of Ancient Nalanda University",
    "Vaishali Ashokan Pillar",
    "Patna Sahib Gurudwara"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Venue & Travel</h2>
        
        {/* Main Venue Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Conference Venue</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ICNARI-2026 will be held at <strong>NIT Patna, Bihar, India</strong>. The institute is beautifully situated on the south bank of the River Ganges, behind Gandhi Ghat, one of the most sacred places in Patna.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Historically known as <strong>Patliputra</strong>, Patna has long been a hub of knowledge and culture, attracting scholars and travelers from around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Notable Attractions */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Notable Attractions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{attraction}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Connectivity */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Location & Connectivity</h3>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              The main entrance of NIT Patna is on <strong>Ashok Rajpath</strong>, approximately 3 km from Gandhi Maidan. The campus is well-connected to key city points:
            </p>
          </div>

          <div className="space-y-4">
            {connections.map((connection, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-blue-50 rounded-lg p-5 hover:bg-blue-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  {connection.icon}
                </div>
                <p className="text-gray-800 font-medium">{connection.distance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Location Map</h3>
          <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7164891667407!2d85.16970731501624!3d25.610822983725476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce0d5e56b%3A0x39db8f1a923abf0!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Patna Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}