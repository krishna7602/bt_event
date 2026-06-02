import React from "react";

const Accommodation = () => {
  const hotels = [
    "Radisson Hotel Jalandhar",
    "Ramada by Wyndham Jalandhar City Centre",
    "Best Western Summerlea",
    "Hotel President",
    "Hotel Residency",
    "Hotel Imperia Suites",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Accommodation
        </h2>

        {/* Institute Accommodation */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Institute Guest House & Hostels
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Limited accommodation may be available in the Institute Guest House
            and Boys’/Girls’ Hostels at NIT Jalandhar, subject to availability
            and prior approval. Allocation will be done on a first-come,
            first-served basis and priority may be given to invited speakers
            and dignitaries.
          </p>
        </div>

        {/* Nearby Hotels */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Nearby Hotels in Jalandhar
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For participants preferring hotel accommodation, the following
            hotels are located within reasonable distance from NIT Jalandhar.
            Please note that the conference organizers and the institute will
            not be responsible for hotel bookings, payments, or any
            accommodation-related issues. Participants are advised to make
            their own arrangements directly with the hotels.
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
