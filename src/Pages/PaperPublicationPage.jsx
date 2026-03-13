import React from "react";

const PaperPublication = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12 text-justify">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Paper Publication
        </h2>

        {/* Main Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          It is planned to publish the peer-reviewed and selected papers of the
          conference as proceedings with <strong>Springer</strong> in their
          prestigious <strong>Lecture Notes in Electrical Engineering (LNEE)</strong>{" "}
          series. Selected papers will be published as a conference proceedings
          book volume by Springer, subject to their quality standards.
        </p>

        {/* Springer Process */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Publication Process
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              All accepted papers will undergo Springer’s internal quality
              checks before publication.
            </li>
            <li>
              Only papers that successfully pass these checks will be included
              in the proceedings volume.
            </li>
            <li>
              Springer Nature does <strong>not charge any publication fee</strong>{" "}
              for Non-Open Access content.
            </li>
            <li>
              Abstracts, extended abstracts, and short papers of less than
              <strong> 4 pages</strong> are <strong>not eligible</strong> for
              publication.
            </li>
          </ul>
        </div>

        {/* Author Guidelines */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Author & Editor Guidelines
          </h3>

          <p className="text-gray-700 mb-4">
            For detailed instructions regarding manuscript preparation,
            formatting, and editorial processes for conference proceedings,
            authors and editors are advised to refer to the official Springer
            guidelines:
          </p>

          <a
            href="https://www.springer.com/us/authors-editors/conference-proceedings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Springer Conference Proceedings – Author & Editor Guidelines
          </a>
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            <strong>Note:</strong> Final inclusion of papers in the proceedings
            is subject to successful peer review, compliance with Springer
            formatting requirements, and completion of all registration and
            camera-ready submission procedures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaperPublication;
