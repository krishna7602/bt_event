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

const TechnicalProgrammeCommittee = () => {
  const members = [
    {
      name: "Dr. Sample Name 1",
      institute: "NIT Patna",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Sample Name 2",
      institute: "NIT Patna",
      department: "Computer Science and Engineering",
    },
    {
      name: "Dr. Sample Name 3",
      institute: "NIT Patna",
      department: "Electronics and Communication Engineering",
    },
    {
      name: "Dr. Sample Name 4",
      institute: "NIT Patna",
      department: "Mechanical Engineering",
    },
    {
      name: "Dr. Sample Name 5",
      institute: "NIT Patna",
      department: "Civil Engineering",
    },
    {
      name: "Dr. Sample Name 6",
      institute: "NIT Patna",
      department: "Electrical Engineering",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Technical Programme Committee
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

export default TechnicalProgrammeCommittee;
