import React from "react";

const AboutNITJ = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block pb-2">
          About NIT Jalandhar
        </h2>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Dr. B. R. Ambedkar National Institute of Technology, Jalandhar (NIT
            Jalandhar) is one of the premier technical institutions in India.
            Established in 1987 as a Regional Engineering College and accorded
            the status of National Institute of Technology in 2002, the institute
            has been recognized as an <strong>Institute of National Importance</strong>
            by the Government of India.
          </p>

          <p>
            NIT Jalandhar is located on a sprawling and green campus along the
            Jalandhar–Amritsar Highway in Punjab. The institute provides a
            vibrant academic environment that fosters innovation, critical
            thinking, and interdisciplinary research, supported by
            state-of-the-art infrastructure and modern laboratories.
          </p>

          <p>
            The institute offers high-quality education at the Undergraduate
            (B.Tech), Postgraduate (M.Tech, MBA, M.Sc.), and Doctoral (Ph.D.)
            levels through its highly qualified and experienced faculty members.
            Emphasis is placed on outcome-based education, industry relevance,
            and research-driven learning.
          </p>

          <p>
            NIT Jalandhar houses multiple academic departments including
            Civil Engineering, Computer Science & Engineering, Electrical
            Engineering, Electronics & Communication Engineering, Information
            Technology, Instrumentation & Control Engineering, Mechanical
            Engineering, Textile Technology, and Chemical Engineering, along
            with well-established departments of Physics, Chemistry,
            Mathematics, and Humanities & Management.
          </p>

          <p>
            With a strong focus on research, innovation, and entrepreneurship,
            NIT Jalandhar actively contributes to national missions in energy,
            sustainability, digital transformation, and advanced manufacturing.
            The institute maintains close collaboration with industries,
            research organizations, and global academic partners, reinforcing
            its reputation for academic excellence and societal impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNITJ;
