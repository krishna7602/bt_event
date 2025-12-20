import React from "react";

const toursData = [
  {
    title: "Mahabodhi Temple, Bodh Gaya",
    photo: "https://source.unsplash.com/600x400/?mahabodhi,bodhgaya",
    description:
      "The Mahabodhi Temple Complex at Bodh Gaya is one of the four holy sites associated with Lord Buddha’s life and enlightenment. Originally built by Emperor Ashoka in the 3rd century BC, the present structure dates to the Gupta period. The brick-built temple rises to 55 meters and is surrounded by ancient stone railings.",
  },
  {
    title: "Takhat Sri Harimandir Ji, Patna Sahib",
    photo: "https://source.unsplash.com/600x400/?patna,sikh,gurudwara",
    description:
      "Takhat Sri Harimandir Ji, also known as Patna Sahib Gurudwara, is the birthplace of Guru Gobind Singh. Built in 1666 by Maharaja Ranjit Singh, it is one of the five Takhts of Sikhism and houses sacred relics of the tenth Sikh Guru.",
  },
  {
    title: "Nalanda Mahavihara",
    photo: "https://source.unsplash.com/600x400/?nalanda,ruins,bihar",
    description:
      "Nalanda Mahavihara was one of the world’s first residential universities, flourishing between the 5th and 12th centuries CE. It attracted scholars from across Asia and was declared a UNESCO World Heritage Site in 2016.",
  },
  {
    title: "Vishwa Shanti Stupa, Rajgir",
    photo: "https://source.unsplash.com/600x400/?rajgir,peace,stupa",
    description:
      "The Vishwa Shanti Stupa is a white peace pagoda built through Indo-Japanese collaboration in 1969. Located atop Ratnagiri Hill, it offers panoramic views and features four golden Buddha statues depicting key events of his life.",
  },
  {
    title: "Valmiki National Park",
    photo: "https://source.unsplash.com/600x400/?forest,wildlife,india",
    description:
      "Valmiki National Park is Bihar’s only national park, spread across 880 sq. km in the Himalayan Terai region. It is home to Bengal tigers, leopards, diverse bird species, and rich forest biodiversity.",
  },
  {
    title: "Vikramshila University",
    photo: "https://source.unsplash.com/600x400/?ancient,university,ruins",
    description:
      "Established in the 8th century by King Dharampala, Vikramshila was a major center of Buddhist learning during the Pala Empire. The ruins lie along the banks of the river Ganga in Bhagalpur district.",
  },
  {
    title: "Vikramshila Gangetic Dolphin Sanctuary",
    photo: "https://source.unsplash.com/600x400/?ganges,river,dolphin",
    description:
      "This sanctuary stretches 50 km along the Ganges River and was established to protect the endangered Gangetic Dolphin. Boat safaris offer opportunities to observe dolphins and other aquatic species.",
  },
  {
    title: "Pawapuri",
    photo: "https://source.unsplash.com/600x400/?jain,temple,pond",
    description:
      "Pawapuri is a sacred Jain pilgrimage site where Lord Mahavira attained Nirvana. The Jal Mandir, built in white marble amidst a lotus pond, marks the cremation site and attracts devotees from across the world.",
  },
  {
    title: "Lauriya Nandangarh",
    photo: "https://source.unsplash.com/600x400/?ashoka,pillar,india",
    description:
      "Lauriya Nandangarh is renowned for its Ashokan Pillar and ancient burial mounds. The pillar bears inscriptions in Brahmi script and reflects the architectural brilliance of the Mauryan period.",
  },
  {
    title: "Tomb of Sher Shah Suri",
    photo: "https://source.unsplash.com/600x400/?sher+shah+suri,tomb",
    description:
      "Located in Sasaram, this red sandstone mausoleum is a masterpiece of Indo-Islamic architecture. Built in the 16th century, it stands in the middle of an artificial lake and influenced later Mughal designs.",
  },
  {
    title: "Navlakha Palace, Rajnagar",
    photo: "https://source.unsplash.com/600x400/?palace,heritage,bihar",
    description:
      "Navlakha Palace was built in the 19th century by the Maharaja of Darbhanga. Though partially damaged in the 1934 earthquake, its ruins reflect the grandeur of Mithila’s royal architectural heritage.",
  },
];

const Tours = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Tours
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map((tour, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={tour.photo}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tour.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
