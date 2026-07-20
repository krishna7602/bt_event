import React from "react";

import goldenTempleDay from '../assets/gallery/golden_temple_day.jpg';
import goldenTempleNight from '../assets/gallery/golden_temple_night.jpg';
import durgianaMandir from '../assets/gallery/durgiana_mandir.jpg';
import statue from '../assets/gallery/statute.jpg';
import jallianwalaBagh from '../assets/gallery/jallianwala_bagh.png';
import scienceCity from '../assets/gallery/science_city.jpg';
import ramTirath from '../assets/gallery/ram_tirath.jpg';
import haveli from '../assets/gallery/haveli.png';
import gurudwara from '../assets/gallery/gurudwara.jpg';

const PhotoGallery = () => {
  const photos = [
    goldenTempleDay,
    goldenTempleNight,
    durgianaMandir,
    statue,
    jallianwalaBagh,
    scienceCity,
    ramTirath,
    haveli,
    gurudwara
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-12">
      <div className="w-full">
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

export default PhotoGallery;
