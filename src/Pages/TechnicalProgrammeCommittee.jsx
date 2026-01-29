import React from "react";
import skPahujaPhoto from '../assets/committee/sk_pahuja.png';
import rohitMehraPhoto from '../assets/committee/rohit_mehra.jpg';
import kcSharmaPhoto from '../assets/committee/kc_sharma.jpg';
import maheshKumarPhoto from '../assets/committee/mahesh_kumar.jpg';
import harimuruganPhoto from '../assets/committee/tech_harimurugan.jpg';
import madanKDasPhoto from '../assets/committee/tech_madan_k_das.jpg';
import pRamakrishnaPhoto from '../assets/committee/tech_p_ramakrishna.jpg';
import arunRathorePhoto from '../assets/committee/tech_arun_rathore.jpg';
import bnRaoPhoto from '../assets/committee/tech_b_n_rao.jpeg';
import sounakNandiPhoto from '../assets/committee/tech_sounak_nandi.png';
import debottamMukherjeePhoto from '../assets/committee/tech_debottam_mukherjee.png';
import swetaMahajanPhoto from '../assets/committee/tech_sweta_mahajan.jpg';
import neelamRaniPhoto from '../assets/committee/tech_neelam_rani.jpg';
import karanJainPhoto from '../assets/committee/tech_karan_jain.jpg';
import nishaChaurasiaPhoto from '../assets/committee/tech_nisha_chaurasia.jpeg';
import anilKumarYadavPhoto from '../assets/committee/tech_anil_kumar_yadav.jpg';
import kundanKumarPhoto from '../assets/committee/tech_kundan_kumar.jpg';

/* Reusable Member Card */
const MemberCard = ({ name, institute, department, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      {/* Dummy Photo */}
      <img
        src={photo || "https://via.placeholder.com/100"}
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
    // Technical Team
    {
      name: "Prof. S. K. Pahuja",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: skPahujaPhoto,
    },
    {
      name: "Prof. Rohit Mehra",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Physics",
      photo: rohitMehraPhoto,
    },
    {
      name: "Dr. Kailash Chand Sharma",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: kcSharmaPhoto,
    },
    {
      name: "Dr. Mahesh Kumar",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: maheshKumarPhoto,
    },
    {
      name: "Dr. Harimurugan",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: harimuruganPhoto,
    },
    {
      name: "Dr. Madan K. Das",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: madanKDasPhoto,
    },
    {
      name: "Dr. P. Ramakrishna",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: pRamakrishnaPhoto,
    },
    {
      name: "Dr. Arun Rathore",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: arunRathorePhoto,
    },
    {
      name: "Dr. B. N. Rao",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: bnRaoPhoto,
    },
    {
      name: "Dr. Sounak Nandi",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: sounakNandiPhoto,
    },
    {
      name: "Dr. Debottam Mukherjee",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electrical Engineering",
      photo: debottamMukherjeePhoto,
    },
    {
      name: "Dr. Sweta Mahajan",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Computer Science and Engineering",
      photo: swetaMahajanPhoto,
    },
    {
      name: "Dr. Neelam Rani",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Civil Engineering",
      photo: neelamRaniPhoto,
    },
    {
      name: "Dr. Karan Jain",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Instrumentation and Control Engineering",
      photo: karanJainPhoto,
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
      photo: nishaChaurasiaPhoto,
    },
    {
      name: "Dr. Anil Kumar Yadav",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Instrumentation and Control Engineering",
      photo: anilKumarYadavPhoto,
    },
    {
      name: "Dr. Kundan Kumar",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Electronics and Communication Engineering",
      photo: kundanKumarPhoto,
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
