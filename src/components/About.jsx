import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* About the Conference */}
        <div id="about" className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            About the Conference
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The <strong>National Conference on “Net-Zero Energy Systems”</strong>,
              proposed by the <strong>Department of Electrical Engineering</strong>,
              aims to address the global and national imperatives of transitioning
              from fossil-fuel-based energy systems to sustainable, low-carbon,
              and ultimately net-zero energy solutions.
            </p>

            <p>
              India’s commitments under the <strong>Paris Agreement</strong> and
              its ambitious target of achieving <strong>net-zero emissions by
              2070</strong> demand transformative technological innovation,
              forward-looking policies, and strong collaboration among academia,
              industry, and policymakers.
            </p>

            <p>
              This conference will bring together researchers, scientists,
              academicians, industry professionals, and policy experts to discuss
              recent advancements, emerging pathways, and critical challenges in
              clean energy technologies, smart power systems, hydrogen energy,
              energy storage, and carbon-neutral infrastructures.
            </p>

            <p>
              Through keynote lectures, technical sessions, and interactive
              discussions, the conference aims to foster interdisciplinary
              learning, promote research collaborations, and contribute
              meaningfully to India’s sustainable energy transition.
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

        {/* About NIT Jalandhar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-green-700">
            About NIT Jalandhar
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Dr. B. R. Ambedkar National Institute of Technology,
              Jalandhar (NIT Jalandhar)</strong> is one of the premier engineering
              institutions in India and has been declared an
              <strong> Institute of National Importance</strong> by the
              Government of India.
            </p>

            <p>
              Established with the objective of imparting high-quality technical
              education and promoting cutting-edge research, NIT Jalandhar has
              consistently contributed to academic excellence, innovation, and
              national development.
            </p>

            <p>
              The Institute offers undergraduate, postgraduate, and doctoral
              programs across multiple disciplines including Electrical
              Engineering, Computer Science & Engineering, Mechanical
              Engineering, Civil Engineering, Electronics & Communication
              Engineering, and allied sciences.
            </p>

            <p>
              With well-equipped laboratories, experienced faculty, and a
              strong emphasis on research and development, NIT Jalandhar actively
              engages in interdisciplinary research addressing contemporary
              challenges in energy systems, sustainability, smart infrastructure,
              and advanced technologies.
            </p>

            <p>
              The Institute continues to play a pivotal role in shaping skilled
              professionals and fostering innovations aligned with India’s
              long-term goals of sustainability and net-zero emissions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
