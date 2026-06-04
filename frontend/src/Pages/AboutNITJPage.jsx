import React from "react";

const AboutNITJ = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-emerald-600 inline-block pb-2">
          About NIT Jalandhar
        </h2>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Dr. B. R. Ambedkar National Institute of Technology Jalandhar is among the 31
            NITs established by Ministry of Education (earlier MHRD), Govt. of India. The
            Institute came into existence in the year 1987 (earlier Regional Engineering
            College, Jalandhar) and obtained the status "Institute of National Importance" by
            Act of Parliament 2007.
          </p>

          <p>
            The institute is offering B.Tech., M.Sc., M.Tech., and Ph.D. programmes in
            various disciplines such as Biotechnology, Chemical Engineering, Civil Engineering,
            Computer Science and Engineering, Electrical Engineering, Electronics and
            Communication Engineering, Industrial and Production Engineering, Information
            Technology, Instrumentation and Control Engineering, Mechanical Engineering,
            Textile Technology, <em>etc.</em>
          </p>

          <p>
            NIT Jalandhar has secured the <strong>55<sup>th</sup> NIRF rank</strong> in the
            engineering category in 2025.
          </p>

          <p>
            NIT Jalandhar is located on a sprawling and green campus along the
            Jalandhar–Amritsar Highway in Punjab. The institute provides a vibrant academic
            environment that fosters innovation, critical thinking, and interdisciplinary
            research, supported by state-of-the-art infrastructure and modern laboratories.
          </p>

          <p>
            With a strong focus on research, innovation, and entrepreneurship, NIT Jalandhar
            actively contributes to national missions in energy, sustainability, digital
            transformation, and advanced manufacturing. The institute maintains close
            collaboration with industries, research organizations, and global academic
            partners, reinforcing its reputation for academic excellence and societal impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNITJ;
