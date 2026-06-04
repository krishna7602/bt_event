import React from "react";

const speakers = [
  {
    name: "Prof. Makarand M. Ghangrekar",
    designation: "Director",
    organization: "National Institute of Technology Puducherry",
    location: "Karaikal, Puducherry, India",
  },
  {
    name: "Prof. Kiran Bala",
    designation: "Professor, Mehta Family School of Sustainability",
    organization: "Indian Institute of Technology Indore",
    location: "Madhya Pradesh, India",
  },
  {
    name: "Dr. Sunil Kumar",
    designation:
      "Head, Centre for Industrial Ecology and Circular Economy & Professor, AcSIR",
    organization: "CSIR-NEERI",
    location: "Nagpur, Maharashtra, India",
  },
  {
    name: "Dr. Tabish Nawaz",
    designation:
      "Associate Professor, Environmental Science and Engineering Department",
    organization: "Indian Institute of Technology Bombay",
    location: "Maharashtra, India",
  },
  {
    name: "Dr. Sanak Ray",
    designation: "Senior Scientist",
    organization: "CSIR-CSMCRI",
    location: "Bhavnagar, Gujarat, India",
  },
  {
    name: "Dr. Vinay Kumar Tyagi",
    designation: "Scientist D, Environmental Hydrology Division",
    organization: "National Institute of Hydrology (NIH)",
    location: "Roorkee, Uttarakhand, India",
  },
  {
    name: "Dr. Vanish Kumar",
    designation: "Scientist C",
    organization:
      "BRIC-National Agri-Food and Biomanufacturing Institute (NABI)",
    location: "Mohali, Punjab, India",
  },
  {
    name: "Dr. Sanjeev Mishra",
    designation: "Scientist D, Biochemical Conversion Division",
    organization:
      "Swaran Singh National Institute of Renewable Energy (SSS NIRE)",
    location: "Kapurthala, Punjab, India",
  },
  {
    name: "Dr. Jampala Annie Modestra",
    designation: "DST-Inspire Faculty",
    organization: "CSIR-NEERI Hyderabad Regional Center",
    location: "Hyderabad, Telangana, India",
  },
  {
    name: "Dr. Arvind Kumar Shakya",
    designation:
      "Assistant Professor, Department of Earth & Environmental Sciences",
    organization: "IISER Mohali",
    location: "Punjab, India",
  },
  {
    name: "Dr. Poonam Choudhary",
    designation:
      "Assistant Professor, Department of Biosciences and Bioengineering",
    organization: "Indian Institute of Technology Roorkee",
    location: "Uttarakhand, India",
  },
  {
    name: "Dr. Sovik Das",
    designation:
      "Assistant Professor, Department of Civil & Environmental Engineering",
    organization: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
  },
];

const KeynoteSpeakers = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            Keynote Speakers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Speaker List */}
        <div className="grid gap-5">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">

                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {speaker.name}
                  </h3>

                  <p className="text-blue-700 font-medium mt-1">
                    {speaker.designation}
                  </p>

                  <p className="text-gray-700 mt-1">
                    {speaker.organization}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {speaker.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 italic">
            * Additional keynote speakers may be announced soon.
          </p>
        </div>

      </div>
    </section>
  );
};

export default KeynoteSpeakers;