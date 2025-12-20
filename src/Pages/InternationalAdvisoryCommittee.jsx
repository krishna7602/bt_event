import React from "react";

/* Reusable Member Card */
const MemberCard = ({ name, institute, department }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      {/* Dummy Photo */}
      <img
        src="https://via.placeholder.com/100"
        alt={name}
        className="w-20 h-20 rounded-full object-cover border"
      />

      {/* Details */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-sm text-gray-500">{department}</p>
      </div>
    </div>
  );
};

const InternationalAdvisoryCommittee = () => {
  const members = [
    {
      name: "Prof. Massood Z. Atashbar",
      institute: "Michigan University, USA",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Prof. K.S. Chang-Liao",
      institute: "National Tsing Hua University",
      department: "Engineering and System Science",
    },
    {
      name: "Prof. Cheong Kuan Yew",
      institute: "University Sains Malaysia",
      department: "Material Sciences",
    },
    {
      name: "Prof. Sharath Sriram",
      institute: "RMIT University, Australia",
      department: "School of Engineering",
    },
    {
      name: "Prof. Lan Fu",
      institute: "Australian National University",
      department: "Electronic Materials Engineering",
    },
    {
      name: "Prof. Rajendra Singh",
      institute: "Clemson University, USA",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Prof. Myo Than Htay",
      institute: "Shinshu University, Japan",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Muhamad Safwan Abd Rahman",
      institute: "Universiti Tenaga Nasional",
      department: "Electrical Power Engineering",
    },
    {
      name: "Dr. Prashant Kumar",
      institute: "Khalifa University, UAE",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Dr. Akshay Kumar",
      institute: "University of Cyprus",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Ciptian Weried Priananda",
      institute: "Institut Teknologi Sepuluh Nopember",
      department: "Electrical Automation Engineering",
    },
    {
      name: "Prof. Akshay Kumar Saha",
      institute:
        "School of Engineering, University of KwaZulu-Natal, South Africa",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Syed Muhammad Amrr",
      institute:
        "COEP, King Fahad University of Petroleum & Minerals, KSA",
      department: "Control & Instrumentation Engineering",
    },
    {
      name: "Dr. Sunil Kumar Telagamsetti",
      institute: "University of Gävle, Sweden",
      department: "Electrical Engineering",
    },
    {
      name: "Prof. Stefan Panić",
      institute:
        "University of Pristina, Kosovska Mitrovica",
      department: "Science and Mathematics",
    },
    {
      name: "Prof. Časlav Stefanović",
      institute:
        "University of Pristina, Kosovska Mitrovica, Serbia",
      department: "Sciences and Mathematics",
    },
    {
      name: "Dr. Parvez Shaik",
      institute:
        "Microchip Technology Solutions, Cambridge, UK",
      department: "Electrical and Computer Engineering",
    },
    {
      name: "Dr. Deepak Kumar",
      institute: "Khalifa University, Abu Dhabi, UAE",
      department: "Computer and Communication Engineering",
    },
    {
      name: "Dr. Anudeep Bhatraj",
      institute: "University of Haifa, Israel",
      department: "Electrical Engineering",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          International Advisory Committee
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalAdvisoryCommittee;
