import React from "react";
import { MapPin, Plane, Train, Bus } from "lucide-react";

export default function Venue() {
  const connections = [
    {
      icon: <Plane className="w-6 h-6 text-blue-600" />,
      distance: "90 km from Sri Guru Ram Dass Jee International Airport, Amritsar"
    },
    {
      icon: <Train className="w-6 h-6 text-blue-600" />,
      distance: "15 km from Jalandhar City / Jalandhar Cantt Railway Station"
    },
    {
      icon: <Bus className="w-6 h-6 text-blue-600" />,
      distance: "Well connected by state highways, city buses, and local transport"
    }
  ];

  const attractions = [
    "Pushpa Gujral Science City, Kapurthala",
    "Devi Talab Mandir",
    "Wonderland Theme Park",
    "Rangla Punjab Haveli"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Venue & Travel
        </h2>

        {/* Main Venue Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Conference Venue
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The conference will be held at{" "}
                <strong>
                  Dr. B. R. Ambedkar National Institute of Technology (NIT),
                  Jalandhar, Punjab, India
                </strong>.
                The institute is one of the premier technical institutions of
                the country, functioning under the Ministry of Education,
                Government of India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                NIT Jalandhar is located on the Jalandhar–Amritsar highway and
                provides a peaceful academic environment with modern
                infrastructure, well-equipped laboratories, and excellent
                connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Notable Attractions */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Nearby Attractions
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  {attraction}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Connectivity */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Location & Connectivity
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            NIT Jalandhar is situated on the Jalandhar–Amritsar National Highway
            (NH-3) and is easily accessible from major cities in Punjab and
            neighboring states.
          </p>

          <div className="space-y-4">
            {connections.map((connection, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-blue-50 rounded-lg p-5 hover:bg-blue-100 transition-colors"
              >
                <div className="flex-shrink-0">{connection.icon}</div>
                <p className="text-gray-800 font-medium">
                  {connection.distance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Location Map
          </h3>
          <div className="w-full h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=NIT+Jalandhar&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Jalandhar Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
