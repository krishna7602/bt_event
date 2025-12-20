import React from "react";

/* Reusable Card */
const MemberCard = ({ name, designation, institute, department }) => {
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
              name: "Prof. Pradip K. Jain",
              designation: "Director",
              institute: "NIT Patna",
              department: "Electronics and Communication Engineering",
            },
          ]}
        />

        {/* Chairman */}
        <CommitteeSection
          title="Chairman"
          members={[
            {
              name: "Prof. Ramesh Kumar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
            {
              name: "Dr. Rajib Kumar Mandal",
              institute: "NIT Patna",
              department: "Electrical Engineering",
            },
          ]}
        />

        {/* Organizing Chair / Convenor */}
        <CommitteeSection
          title="Organizing Chair / Convenor"
          members={[
            {
              name: "Dr. Amitesh Kumar",
              institute: "NIT Patna",
              department: "Electrical Engineering",
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
