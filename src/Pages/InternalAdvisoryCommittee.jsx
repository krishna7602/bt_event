import React from "react";
import akankshaPhoto from '../assets/committee/advisory/akanksha_shukla.jpg';
import chandraSekharPhoto from '../assets/committee/advisory/chandra_sekhar_obbu.jpg';
import manojKumawatPhoto from '../assets/committee/advisory/manoj_kumawat.jpg';
import naveenKumarPhoto from '../assets/committee/advisory/naveen_kumar_sharma.png';
import neerajKumarPhoto from '../assets/committee/advisory/neeraj_kumar.jpg';
import satishSharmaPhoto from '../assets/committee/advisory/satish_sharma.png';
import sreenuSreekumarPhoto from '../assets/committee/advisory/sreenu_sreekumar.png';
import surenderHansPhoto from '../assets/committee/advisory/surender_hans.png';

/* Reusable Member Card */
const MemberCard = ({ name, institute, department, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      {/* Photo */}
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

const InternalAdvisoryCommittee = () => {
  const members = [
    {
      name: "Dr. Sachin Kumar Jain",
      institute: "IIIT Jabalpur",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Pankaj Kumar",
      institute: "NIT Srinagar",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Manoj Kumawat",
      institute: "NIT Delhi",
      department: "Electrical Engineering",
      photo: manojKumawatPhoto,
    },
    {
      name: "Dr. Satish Sharma",
      institute: "MNIT Jaipur",
      department: "Electrical Engineering",
      photo: satishSharmaPhoto,
    },
    {
      name: "Dr. Rajvir Kaur",
      institute: "NIT Puducherry",
      department: "Electrical & Electronics Engineering",
    },
    {
      name: "Dr. Akanksha Shukla",
      institute: "SVNIT Surat",
      department: "Electrical Engineering",
      photo: akankshaPhoto,
    },
    {
      name: "Dr. Krishanu Nath",
      institute: "NIT Agartala",
      department: "Electronics and Instrumentation Engineering",
    },
    {
      name: "Dr. Chandra Sekhar Obbu",
      institute: "NIT Delhi",
      department: "Electrical Engineering",
      photo: chandraSekharPhoto,
    },
    {
      name: "Dr. Surender Hans",
      institute: "MNIT Jaipur",
      department: "Electrical Engineering",
      photo: surenderHansPhoto,
    },
    {
      name: "Dr. Nisha",
      institute: "Amity University Haryana (AUH)",
      department: "Electronics and Communication Engineering",
    },
    {
      name: "Dr. Vivek Prakash",
      institute: "Banasthali Vidyapith (B.V.)",
      department: "Electrical Engineering",
    },
    {
      name: "Dr. Neeraj Kumar",
      institute: "Manipal University Jaipur (M.U.J.)",
      department: "Electrical Engineering",
      photo: neerajKumarPhoto,
    },
    {
      name: "Dr. Vivek Sharma",
      institute: "NIT Hamirpur",
      department: "Instrumentation and Control Engineering",
    },
    {
      name: "Dr. Naveen Kumar Sharma",
      institute: "Punjab Technical University (PTU)",
      department: "Electrical Engineering",
      photo: naveenKumarPhoto,
    },
    {
      name: "Dr. Sreenu Sreekumar",
      institute: "NIT Silchar",
      department: "Electrical Engineering",
      photo: sreenuSreekumarPhoto,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Internal Advisory Committee
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

export default InternalAdvisoryCommittee;
