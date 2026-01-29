import React from "react";
import arunRathorePhoto from '../assets/committee/tech_arun_rathore.jpg';
import pRamakrishnaPhoto from '../assets/committee/tech_p_ramakrishna.jpg';
import bnRaoPhoto from '../assets/committee/tech_b_n_rao.jpeg';

/* Reusable Member Card */
const MemberCard = ({ name, institute, department, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      <img
        src={photo || "https://via.placeholder.com/100"}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border"
      />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-sm text-gray-500">{department}</p>
      </div>
    </div>
  );
};

const PaperReviewCommittee = () => {
  const members = [
    {
      name: "Dr. Arun Rathore",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: arunRathorePhoto,
    },
    {
      name: "Dr. P. Ramakrishna",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: pRamakrishnaPhoto,
    },
    {
      name: "Dr. B. N. Rao",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: bnRaoPhoto,
    },
    {
      name: "Dr. Gagandeep Singh Dua",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Paper Review Committee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaperReviewCommittee;
