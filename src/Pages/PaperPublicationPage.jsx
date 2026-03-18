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
          conference as proceedings in a reputed series. Selected papers will be published as a conference proceedings
          volume, subject to quality standards.
        </p>

        {/* Publication Process */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Publication Process
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              All accepted papers will undergo internal quality
              checks before publication.
            </li>
            <li>
              Only papers that successfully pass these checks will be included
              in the proceedings volume.
            </li>
            <li>
              There is <strong>no publication fee</strong>{" "}
              for Non-Open Access content.
            </li>
            <li>
              Abstracts, extended abstracts, and short papers of less than
              <strong> 11 pages</strong> are <strong>not eligible</strong> for
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
            authors and editors are advised to refer to the official
            guidelines provided in the templates:
          </p>

          <p className="text-blue-600 font-medium italic">
            Please follow the prescribed formatting guidelines in the provided <a href="/Conference_Paper_Template.zip" download className="font-bold underline hover:text-blue-800 transition-colors">Word Template</a>.
          </p>
        </div>

        {/* Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            <strong>Note:</strong> Final inclusion of papers in the proceedings
            is subject to successful peer review, compliance with 
            formatting requirements, and completion of all registration and
            camera-ready submission procedures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaperPublication;
