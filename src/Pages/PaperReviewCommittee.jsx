import React from "react";

const PaperReviewCommittee = () => {
  const coordinators = [
    { name: "Dr. P. Ramakrishna", role: "Coordinator" },
    { name: "Dr. B.N. Rao", role: "Coordinator" },
    { name: "Dr. Gagandeep Singh Dua", role: "Coordinator" },
  ];

  const members = [
    { name: "Ms. Priyanka Km." },
    { name: "Mr. Devidas" },
    { name: "Mr. Rajdeep Pandey" },
    { name: "Mr. Rajat Goutam" },
    { name: "Ms. Navita" },
    { name: "Mr. Mridul" },
    { name: "Ms. Prakriti" },
    { name: "Mr. Nitish Kumar Sharma" },
    { name: "Mr. Manish" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Paper Review Committee
        </h2>

        {/* Coordinators */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
            Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coordinators.map((c, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition text-center border-t-4 border-blue-600">
                <h4 className="text-lg font-bold text-gray-800">{c.name}</h4>
                <p className="text-sm text-blue-600 font-medium mt-1">{c.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-3">
            Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((m, i) => (
              <div key={i} className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
                <p className="font-semibold text-gray-800">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperReviewCommittee;
