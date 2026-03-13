import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12">

        {/* About the Conference */}
        <div id="about" className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            About the Conference
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The global push toward decarbonization has accelerated the transition from
              conventional fossil-fuel-based energy systems to sustainable, low-carbon, and
              ultimately net-zero energy solutions. India's commitments under the Paris
              Agreement and the target of achieving net-zero emissions by 2070 call for
              transformative innovation, policy reforms, and strategic collaborations. In this context,
              the Department of Electrical Engineering proposes to organize a{" "}
              <strong>National Conference on "Net-Zero Energy Systems, 2026"</strong>, bringing
              together academia, industry, policymakers, and research organizations to discuss the
              latest advancements and emerging pathways in clean energy technologies.
            </p>
          </div>
        </div>

        {/* Conference Objectives */}
        <div id="objectives" className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            Objectives of the Conference
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              To provide a platform for researchers, scientists, and industry
              experts to present innovations in net-zero energy technologies.
            </li>
            <li>
              To discuss challenges, policy frameworks, and future research
              directions required for India’s energy transition.
            </li>
            <li>
              To encourage collaboration between academic institutions and
              industry stakeholders in sustainable energy domains.
            </li>
            <li>
              To showcase emerging technologies in renewable energy, energy
              storage, smart grids, hydrogen systems, and carbon-neutral
              infrastructures.
            </li>
            <li>
              To promote interdisciplinary learning and capacity-building among
              students, research scholars, and professionals.
            </li>
          </ul>
        </div>

        {/* Who Can Attend */}
        <div id="who-can-attend" className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-green-100 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Who can attend?
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            Faculty members from colleges, universities, and technical institutes, students (UG/PG), research scholars, and industry professionals working in related fields are allowed to participate.
          </p>
        </div>

        {/* About NIT Jalandhar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-12">
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            About the Institute
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Dr. B. R. Ambedkar National Institute of Technology Jalandhar is among the 31
              NITs established by Ministry of Education (earlier MHRD), Govt. of India. The
              Institute came into existence in the year 1987 (earlier Regional Engineering
              College, Jalandhar) and obtained the status "Institute of National Importance" by
              Act of Parliament 2007. The institute is offering B.Tech., M.Sc., M.Tech., and Ph.D.
              programmes in various disciplines such as Biotechnology, Chemical Engineering,
              Civil Engineering, Computer Science and Engineering, Electrical Engineering,
              Electronics and Communication Engineering, Industrial and Production Engineering,
              Information Technology, Instrumentation and Control Engineering, Mechanical
              Engineering, Textile Technology, <em>etc.</em> NIT Jalandhar has secured the
              46<sup>th</sup> NIRF rank in the engineering category in 2023.
            </p>
          </div>
        </div>

        {/* About the Department */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            About the Department
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Department of Electrical Engineering was started in the year 2013. The
              department presently offers undergraduate programme B. Tech. in Electrical
              Engineering and research programme Ph.D. in various specialization of Electrical
              Engineering and allied areas. The Department aims to impart high quality education
              to the students and carry out fundamental and industry-oriented research work. The
              major research areas of the department are power system, control system, high
              voltage engineering renewable energy and energy storage. The department has highly
              qualified and competent faculty members and adequate facilities to support teaching
              and learning activities. The alumni of Department are well placed in the top echelons
              of industry &amp; academia both in India &amp; abroad.
            </p>
            <p>
              The department has established a{" "}
              <strong>
                Centre of Excellence (CoE) in Electric Vehicles at an estimated cost of ₹6.5
                crore, sponsored by the Ministry of Minority Affairs (MoMA), Government of India.
              </strong>{" "}
              The centre houses a state-of-the-art Electric Vehicle Laboratory equipped with
              cutting-edge research facilities for postgraduate students and research scholars.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
