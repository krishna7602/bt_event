import React from "react";
import directorPhoto from '../assets/director.jpg';
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

/* Reusable Card */
const MemberCard = ({ name, designation, institute, department, photo }) => {
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

const OrganizingCommittee = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Organizing Committee
        </h2>

        {/* Patron & General Chair */}
        <CommitteeSection
          title="Patron & General Chair"
          members={[
            {
              name: "Prof. Binod Kumar Kanaujia",
              designation: "Director",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              department: "Electronics and Communication Engineering",
              photo: directorPhoto,
            },
          ]}
        />

        {/* Chairman */}
        <CommitteeSection
          title="Chairman"
          members={[
            {
              name: "Prof. Rohit Mehra",
              designation: "Dean Research & Consultancy",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              department: "Physics",
              photo: rohitMehraPhoto,
            },
            {
              name: "Prof. S. K. Pahuja",
              designation: "Head of Department",
              institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
              department: "Electrical Engineering",
              photo: skPahujaPhoto,
            },
          ]}
        />

        {/* Organizing Chair / Convenor */}
        <CommitteeSection
          title="Organizing Chair / Convenor"
          members={[
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
          ]}
        />

        {/* Program Chair */}
        <CommitteeSection
          title="Program Chair"
          members={[
            {
              name: "Dr. Mala De",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Vimlesh Verma",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Jayanti Choudhary",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Ashwani Kumar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
          ]}
        />

        {/* Program Co-Chair */}
        <CommitteeSection
          title="Program Co-Chair"
          members={[
            {
              name: "Dr. Md. Nishat Anwar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Ravi Shankar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Sanjeev Kumar Mallik",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Ambarisha Mishra",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
          ]}
        />

        {/* Program Secretary */}
        <CommitteeSection
          title="Program Secretary"
          members={[
            {
              name: "Dr. Ajit Kumar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Arunangshu Ghosh",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Gagan Deep Meena",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Dharmendra Kumar Dheer",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. M. Senthil Kumar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
          ]}
        />

        {/* Program Coordinators */}
        <CommitteeSection
          title="Program Coordinators"
          members={[
            {
              name: "Dr. Bhabani Shankar Das",
              institute: "NIT Patna",
              department: "Civil Engineering",
            },
            {
              name: "Dr. Jitendra Bahadur Maurya",
              institute: "NIT Patna",
              department: "Electronics and Communication Engineering",
            },
            {
              name: "Dr. Ambrish Maurya",
              institute: "NIT Patna",
              department: "Mechanical Engineering",
            },
            {
              name: "Dr. Shyam Singh Rajput",
              institute: "NIT Patna",
              department: "Computer Science and Engineering",
            },
            {
              name: "Dr. Trilochan Penthia",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
          ]}
        />

      </div>
    </div>
  );
};

export default OrganizingCommittee;
