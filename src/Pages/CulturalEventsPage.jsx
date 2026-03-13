import React from "react";

const culturalEventsData = [
  {
    title: "Cultural Evening – Event 1",
    photo: "https://source.unsplash.com/600x400/?indian,cultural,dance",
    description:
      "This cultural evening celebrates the rich heritage and diversity of India through music, dance, and artistic performances. Participants and guests will experience traditional and contemporary performances showcasing regional culture, creativity, and expression in a vibrant atmosphere.",
  },
  {
    title: "Folk & Classical Showcase – Event 2",
    photo: "https://source.unsplash.com/600x400/?folk,music,india",
    description:
      "The event features folk and classical performances highlighting India’s timeless traditions. Artists will present soulful music and energetic dance forms, creating an engaging and immersive cultural experience for conference delegates.",
  },
  {
    title: "Youth Cultural Night – Event 3",
    photo: "https://source.unsplash.com/600x400/?stage,performance,festival",
    description:
      "A lively cultural night featuring student-led performances, fusion music, and modern art forms. This event aims to foster interaction, relaxation, and cultural exchange among participants in an informal and joyful setting.",
  },
];

const CulturalEvents = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Cultural Events
        </h2>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalEventsData.map((event, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={event.photo}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalEvents;
