import React from "react";
import goldenTempleDay from "../assets/gallery/golden_temple_day.jpg";
import goldenTempleNight from "../assets/gallery/golden_temple_night.jpg";
import jallianwalaBagh from "../assets/gallery/jallianwala_bagh.png";
import scienceCity from "../assets/gallery/science_city.jpg";
import haveli from "../assets/gallery/haveli.png";
import durgianaMandir from "../assets/gallery/durgiana_mandir.jpg";
import ramTirath from "../assets/gallery/ram_tirath.jpg";
import gurudwara from "../assets/gallery/gurudwara.jpg";
import statue from "../assets/gallery/statue.png";

const toursData = [
  {
    title: "Golden Temple, Amritsar",
    photo: goldenTempleDay,
    description:
      "The Harmandir Sahib, also known as the Golden Temple, is the preeminent spiritual site of Sikhism. Located in Amritsar, it is famous for its stunning golden dome and the surrounding Amrit Sarovar (holy tank). It is open to people of all faiths.",
  },
  {
    title: "Jallianwala Bagh, Amritsar",
    photo: jallianwalaBagh,
    description:
      "A memorial of national importance, Jallianwala Bagh commemorates the hundreds of innocent civilians killed by British troops in 1919. The site preserves bullet marks on the walls and the historic well within the park.",
  },
  {
    title: "Pushpa Gujral Science City, Kapurthala",
    photo: scienceCity,
    description:
      "Located near Jalandhar, this science city is one of the largest in North India. It features a planetarium, flight simulator, earthquake simulator, and various interactive galleries exploring physical, liquid, and life sciences.",
  },

  {
    title: "Durgiana Temple, Amritsar",
    photo: durgianaMandir,
    description:
      "Dedicated to Goddess Durga, this temple's architecture is inspired by the Golden Temple. It is built in the middle of a sacred lake and is famous for its exquisite silver doors, earning it the name 'Silver Temple'.",
  },
  {
    title: "Bhagwan Valmiki Tirath Sthal (Ram Tirath)",
    photo: ramTirath,
    description:
      "An ancient temple complex believed to be the birthplace of Luv and Kush. It is deeply associated with the Ramayana and features a large holy sarovar and beautifully designed monuments.",
  },
  {
    title: "Wagah Border, Amritsar",
    photo: statue, // Using the statue image as a symbolic represention
    description:
      "Famous for its ceremonial 'Beating Retreat' ceremony, the Wagah border between India and Pakistan is a major attraction. The event is marked by patriotic fervor and synchronized military maneuvers.",
  },
  {
    title: "Devi Talab Mandir, Jalandhar",
    photo: gurudwara, // Using a symbolic place of worship image
    description:
      "One of the most sacred Hindu temples in North India, Devi Talab Mandir is dedicated to Goddess Durga. It is believed to be more than 200 years old and features a sacred pool (talab) that is older than the temple itself.",
  },
  {
    title: "Jalandhar City Landmarks",
    photo: gurudwara,
    description:
      "Jalandhar boasts several historic Gurudwaras and monuments. The city is a hub of traditional and modern Punjabi culture, offering a unique blend of heritage and contemporary development.",
  },
  {
    title: "Golden Temple (Night View)",
    photo: goldenTempleNight,
    description:
      "The Golden Temple takes on a magical glow after sunset. The illuminated reflections on the sarovar offer a serene and deeply moving spiritual experience for visitors from around the world.",
  },
];

const Tours = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Explore <span className="text-blue-600">Punjab</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage, spiritual landmarks, and vibrant culture of Jalandhar and Amritsar during your conference visit.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {toursData.map((tour, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.photo}
                  alt={tour.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">View Location</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {tour.description}
                </p>
              </div>

              {/* Footer/Action */}
              <div className="px-8 pb-8">
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Information */}
        <div className="mt-20 bg-blue-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Plan Your Visit</h3>
              <p className="text-blue-100 text-lg">
                Complimentary guided tours for conference delegates can be arranged upon request. Please visit the registration desk for coordination and transport details.
              </p>
            </div>
            <button className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
              Contact Organizing Committee
            </button>
          </div>
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-800 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-blue-800 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
