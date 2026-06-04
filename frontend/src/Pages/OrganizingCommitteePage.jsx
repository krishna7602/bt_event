import React from "react";
import directorPhoto from '../assets/director.jpg';
import rohitMehraPhoto from '../assets/committee/rohit_mehra.jpg';

/* Reusable Card */
const MemberCard = ({ name, designation, institute, department, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex gap-4 items-center hover:shadow-lg transition border border-gray-100">
      {/* Photo */}
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 flex-shrink-0"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 text-2xl font-bold flex-shrink-0">
          {name.split('.').pop().trim().charAt(0)}
        </div>
      )}

      {/* Details */}
      <div className="text-left">
        <h4 className="text-lg font-bold text-gray-800 leading-snug">{name}</h4>
        {designation && (
          <p className="text-sm text-blue-600 font-semibold mt-0.5">{designation}</p>
        )}
        {department && <p className="text-xs text-gray-500 font-medium">{department}</p>}
        <p className="text-xs text-gray-600 font-medium mt-0.5">{institute}</p>
      </div>
    </div>
  );
};

/* Section Wrapper */
const CommitteeSection = ({ title, members, columns = 3 }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-black text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
        {title}
      </h3>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

const OrganizingCommittee = () => {
  const patron = [
    {
      name: "Prof. Binod Kumar Kanaujia",
      designation: "Director",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      photo: directorPhoto,
    }
  ];

  const coPatrons = [
    {
      name: "Prof. Anish Kumar Sachdeva",
      designation: "Registrar",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      photo: "https://v1.nitj.ac.in/images/faculty/18030537513.jpg",
    },
    {
      name: "Prof. Rohit Mehra",
      designation: "DRC",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      photo: rohitMehraPhoto,
    },
    {
      name: "Prof. Ajay Bansal",
      designation: "DIIA",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      photo: "https://nitj.ac.in/files/1717741345401-Passport%20Pic.jpg",

    }
  ];

  const chairperson = [
    {
      name: "Prof. Asim Kumar Jana",
      designation: "HOD (Biotechnology)",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      photo: "https://v1.nitj.ac.in/images/faculty/1803054770.jpg"
    }
  ];

  const convenors = [
    {
      name: "Dr. Pritam Kumar Dikshit",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
      photo: "https://nitj.ac.in/files/1770121882151-Photograph.jpg"
    },
    {
      name: "Dr. Prangya Ranjan Rout",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
      photo: "https://v1.nitj.ac.in/images/faculty/23020279109.jpg"
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
      photo: "https://nitj.ac.in/files/1748665959579-M99.JPG"
    }
  ];

  const secretaries = [
    {
      name: "Dr. Nitai Basak",
      designation: "Associate Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Mahesh Kumar Sah",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Nikhil GN",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Sumer Singh Meena",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Anee Mohanty",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Indu Chauhan",
      designation: "Assistant Professor",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
      department: "Department of Biotechnology",
    },
    {
      name: "Dr. Chandi Charan Patra",
      designation: "Assistant Professor",
      department: "Department of Biotechnology",
      institute: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",

    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Committee</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Patron */}
        <CommitteeSection title="Patron" members={patron} columns={1} />

        {/* Co-Patrons */}
        <CommitteeSection title="Co-Patrons" members={coPatrons} columns={3} />

        {/* Chairperson */}
        <CommitteeSection title="Chairperson" members={chairperson} columns={1} />

        {/* Convenors */}
        <CommitteeSection title="Convenors and Organizing Secretaries" members={convenors} columns={3} />

        {/* Organizing Secretaries */}
        <CommitteeSection title="Joint Organizing Secretaries" members={secretaries} columns={3} />
      </div>
    </section>
  );
};

export default OrganizingCommittee;
