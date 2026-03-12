import React from "react";
import directorPhoto from '../assets/director.jpg';
import rohitMehraPhoto from '../assets/committee/rohit_mehra.jpg';
import kcSharmaPhoto from '../assets/committee/kc_sharma.jpg';
import maheshKumarPhoto from '../assets/committee/mahesh_kumar.jpg';
import bsSainiPhoto from '../assets/committee/bs_saini.png';

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

/* Reusable Card */
const MemberCard = ({ name, designation, institute, department, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-start hover:shadow-lg transition">
      {/* Photo */}
      {photo && (
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border flex-shrink-0"
        />
      )}

      {/* Details */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        {designation && (
          <p className="text-sm text-blue-600 font-medium">{designation}</p>
        )}
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-sm text-gray-500">{department}</p>
      </div>
    </div>
  );
};

/* Section Wrapper */
const CommitteeSection = ({ title, members }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

/* Simple Name-Only Grid Section */
const SimpleSection = ({ title, members }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
            <p className="font-semibold text-gray-800">{member.name}</p>
            {member.role && <p className="text-sm text-blue-600">{member.role}</p>}
            {member.email && (
              <p className="text-sm text-gray-600 mt-1">
                Email: <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const OrganizingCommittee = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Organizing Committee
        </h2>

        {/* Chief-Patron */}
        <CommitteeSection
          title="Chief Patron"
          members={[
            {
              name: "Prof. B. K. Kanaujia",
              designation: "Director",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              photo: directorPhoto,
            },
          ]}
        />

        {/* Patron */}
        <CommitteeSection
          title="Patron"
          members={[
            {
              name: "Prof. Rohit Mehra",
              designation: "Dean (R&C)",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              photo: rohitMehraPhoto,
            },
            {
              name: "Dr. B. S. Saini",
              designation: "HOD",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              photo: bsSainiPhoto,
            },
          ]}
        />

        {/* Secretary / Organizing Chair */}
        <CommitteeSection
          title="Organizing Secretary"
          members={[
            {
              name: "Dr. Mahesh Kumar",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              department: "Electrical Engineering",
              photo: maheshKumarPhoto,
            },
            {
              name: "Dr. K. C. Sharma",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              department: "Electrical Engineering",
              photo: kcSharmaPhoto,
            },
          ]}
        />

        {/* Organizing Committee Members */}
        <SimpleSection
          title="Organizing Committee Members"
          members={[
            { name: "Dr. B.S. Saini (HOD)" },
            { name: "Dr. Mahesh Kumar" },
            { name: "Dr. Kailash Chand Sharma" },
            { name: "Dr. Harimurugan" },
            { name: "Dr. P. Ramakrishna" },
            { name: "Dr. B.N. Rao" },
            { name: "Dr. Arun Rathore" },
            { name: "Dr. Sounak Nandi" },
            { name: "Dr. Gagandeep Singh Dua" },
            { name: "Dr. Debottam Mukherjee" },
            { name: "Dr. Madan K. Das" },
            { name: "Dr. Mohit Kumar" },
            { name: "Mr. Alim Mohammad" },
            { name: "Mr. Sukhminder Singh" },
            { name: "Mr. Pankaj Kumar Maurya" },
            { name: "Mr. Rajdeep Pandey" },
            { name: "Ms. Priyanka Km." },
            { name: "Mr. Rajat Goutam" },
            { name: "Ms. Navita" },
            { name: "Mr. Nitish Kumar Sharma" },
            { name: "Mr. Mridul" },
            { name: "Ms. Sapna" },
            { name: "Mr. Vikas" },
          ]}
        />

        {/* Technical Advisory Committee */}
        <CommitteeSection
          title="Technical Advisory Committee"
          members={[
            { name: "Dr. Anup Shukla", institute: "IIT Jammu" },
            { name: "Dr. Asha Sharma", institute: "IIT Roorkee" },
            { name: "Dr. Sanjoy Parida", institute: "IIT Patna" },
            { name: "Dr. Ankush Sharma", institute: "IIT Kanpur" },
            { name: "Dr. R.K. Singh", institute: "IIT BHU" },
            { name: "Dr. Sachin Kumar Jain", institute: "IIIT Jabalpur" },
            { name: "Dr. Shubhendu Dutta", institute: "IIT Delhi" },
            { name: "Dr. Pankaj Kumar", institute: "NIT Srinagar" },
            { name: "Dr. Manoj Kumawat", institute: "NIT Delhi" },
            { name: "Dr. Satish Sharma", institute: "MNIT Jaipur" },
            { name: "Dr. Rajvir Kaur", institute: "NIT Puducherry" },
            { name: "Dr. Akanksha Shukla", institute: "SVNIT Surat" },
            { name: "Dr. Krishanu Nath", institute: "NIT Agartala" },
            { name: "Dr. Chandra Sekhar Obbu", institute: "NIT Delhi" },
            { name: "Dr. Surender Hans", institute: "MNIT Jaipur" },
            { name: "Dr. Sreenu Sreekumar", institute: "NIT Silchar" },
            { name: "Dr. Vivek Sharma", institute: "NIT Hamirpur" },
            { name: "Dr. Sanjeev Kr. Mallik", institute: "NIT Patna" },
            { name: "Dr. Naveen Kumar Sharma", institute: "PTU Jalandhar" },
            { name: "Dr. Nisha Charya", institute: "AUH Gurugram" },
            { name: "Dr. Abhinav Gupta", institute: "AUH Gurugram" },
            { name: "Dr. S. C. Jain", institute: "AUH Gurugram" },
            { name: "Dr. Vivek Prakash", institute: "B.V. Jaipur" },
            { name: "Dr. Neeraj Kanwar", institute: "M.U. Jaipur" },
            { name: "Dr. H.P. Singh", institute: "AUUP, Noida" },
            { name: "Dr. Shveta Mahjan", institute: "NIT Jalandhar" },
            { name: "Dr. Neelam Rani", institute: "NIT Jalandhar" },
            { name: "Prof. Dilbag Singh", institute: "NIT Jalandhar" },
            { name: "Prof. Mamta Khosla", institute: "NIT Jalandhar" },
            { name: "Dr. Karan Jain", institute: "NIT Jalandhar" },
            { name: "Dr. Anil Kumar Yadav", institute: "NIT Jalandhar" },
            { name: "Dr. Harimurugan", institute: "NIT Jalandhar" },
            { name: "Dr. Madan K. Das", institute: "NIT Jalandhar" },
            { name: "Dr. P. Ramakrishna", institute: "NIT Jalandhar" },
            { name: "Dr. Arun Rathore", institute: "NIT Jalandhar" },
            { name: "Dr. B.N. Rao", institute: "NIT Jalandhar" },
            { name: "Dr. Sounak Nandi", institute: "NIT Jalandhar" },
            { name: "Dr. Debottam Mukherjee", institute: "NITJ" },
            { name: "Dr. Gagandeep Singh Dua", institute: "NITJ" },
            { name: "Dr. Nisha Chaurasia", institute: "NIT Jalandhar" },
            { name: "Dr. Kundan Kumar", institute: "NIT Jalandhar" },
            { name: "Dr. D. D. Sharma", institute: "MJPRU Bareilly" },
          ]}
        />

        {/* Hospitality Committee */}
        <SimpleSection
          title="Hospitality Committee"
          members={[
            { name: "Dr. Kailash Chand Sharma" },
            { name: "Mr. Sukhminder Singh", email: "sukhmindersingh@nitj.ac.in" },
            { name: "Mr. Mohammed Alim", email: "mdalim@nitj.ac.in" },
            { name: "Dr. Mohit Kumar", email: "mohitk@nitj.ac.in" },
            { name: "Mr. Pankaj Kumar Maurya", email: "pankajkm@nitj.ac.in" },
            { name: "Mr. Vikas Kumar", email: "vikasraibaruni@gmail.com" },
          ]}
        />

      </div>
    </div>
  );
};

export default OrganizingCommittee;
