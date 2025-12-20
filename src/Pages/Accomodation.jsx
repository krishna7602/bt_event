import React from "react";

const Accommodation = () => {
  const hotels = [
    "Hotel The Panache",
    "Hotel Sharda Residency",
    "The Grand Empire",
    "Hotel Maurya",
    "Hotel Vrindavan",
    "Hotel Gargee Grand",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Accommodation
        </h2>

        {/* Guest House & Hostel */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Guest House and Hostels
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Accommodation in the Guest House and Boys’/Girls’ hostels will be
            provided based on availability.
          </p>
        </div>

        {/* Nearby Hotels */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Nearby Hotels
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            In response to participant requests, a list of nearby hotels has been
            provided for your convenience. Please note that the conference
            organizers or NIT Patna will not be responsible for any
            accommodation-related issues and should not be contacted regarding
            such matters. Participants are requested to assess the suitability
            of their accommodation independently.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hotels.map((hotel, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-3 rounded-md text-gray-800 font-medium"
              >
                {hotel}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
