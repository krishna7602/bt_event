import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* About ICNARI-26 */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">About ICNARI-26</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The International Conference on Next-Generation Adaptive Research and Innovations (ICNARI-2026), organized by the Department of Electrical Engineering at the National Institute of Technology, Patna, Bihar, India, is scheduled to take place in hybrid mode on <strong>6th March 2026 to 8th March 2026</strong>. The conference aims to bring together leading visionaries, researchers, academicians, and industry experts to explore the latest advancements and innovations while showcasing cutting-edge developments in various fields of electrical engineering and sustainable technologies.
            </p>
            <p>
              ICNARI-2026 will feature specialized tracks covering emerging technologies and research in biosensing and neuromorphic computing, electric vehicles, sustainable energy and transportation, renewable energy, photovoltaic cells, and more. These tracks will provide a comprehensive platform to discuss the latest advancements, address challenges, and propose innovative solutions—fostering collaboration and knowledge exchange among the participants.
            </p>
          </div>
        </div>

        {/* About NIT Patna */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">About NIT Patna</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The immersion of ashes of the Father of the Nation, Mahatma Gandhi, in the river Ganges is a significant historical event. The campus has a picturesque river view with historic buildings, presenting a spectacle of architectural delight and natural beauty.
            </p>
            <p>
              National Institute of Technology Patna has been declared as an <strong>Institute of National Importance</strong> and has been granted fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a <strong>Centre of Excellence</strong>, imparting high-level education, training, research, and development in science, engineering technology, and humanities.
            </p>
            <p>
              It is imparting high-quality education & values at UG (B. Tech), PG (M. Tech) & Ph.D programmes through its experienced faculty well-versed in their respective fields of engineering and technology with well-equipped laboratories. At present, the Institute has seven disciplines viz. Architecture, Civil Engineering, Computer Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well-established departments of Physics, Mathematics, and Humanities and Social Science.
            </p>
            <p>
              With a mission to set high standards in education and research, NIT Patna is actively involved in research and development (R&D), pushing the boundaries of innovation across various fields. It holds a distinguished reputation for its long record of academic excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}