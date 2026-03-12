import React from "react";

/* Reusable Member Card */
const MemberCard = ({ name, designation, institute, department }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      {/* Details */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        {designation && <p className="text-sm text-blue-600 font-medium">{designation}</p>}
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-sm text-gray-500">{department}</p>
      </div>
    </div>
  );
};

const TechnicalProgrammeCommittee = () => {
  const members = [
    {
      name: "Prof. Dilbag Singh",
      designation: "HOD",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Instrumentation and Control Engineering",
    },
    {
      name: "Prof. Mamta Khosla",
      designation: "HOD",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electronics and Communication Engineering",
    },
    {
      name: "Dr. Kailash Chand Sharma",
      designation: "HOD",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Mahesh Kumar",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Harimurugan",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Madan K. Das",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. P. Ramakrishna",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Arun Rathore",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. B. N. Rao",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Sounak Nandi",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Debottam Mukherjee",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Sweta Mahajan",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Computer Science and Engineering",
    },
    {
      name: "Dr. Neelam Rani",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Civil Engineering",
    },
    {
      name: "Dr. Karan Jain",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Instrumentation and Control Engineering",
    },
    {
      name: "Dr. Gagandeep Singh Dua",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Nisha Chaurasia",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Information Technology",
    },
    {
      name: "Dr. Anil Kumar Yadav",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Instrumentation and Control Engineering",
    },
    {
      name: "Dr. Kundan Kumar",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electronics and Communication Engineering",
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
