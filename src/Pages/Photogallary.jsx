import React from "react";

const Photogallary = () => {
  const photos = [
    "https://source.unsplash.com/600x400/?conference",
    "https://source.unsplash.com/600x400/?seminar",
    "https://source.unsplash.com/600x400/?university",
    "https://source.unsplash.com/600x400/?auditorium",
    "https://source.unsplash.com/600x400/?research",
    "https://source.unsplash.com/600x400/?technology",
    "https://source.unsplash.com/600x400/?engineering",
    "https://source.unsplash.com/600x400/?presentation",
    "https://source.unsplash.com/600x400/?campus",
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Photo Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photogallary;
