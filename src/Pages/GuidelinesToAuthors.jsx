import React from "react";

const GuidelinesToAuthors = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Guidelines to Authors
        </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          All papers must be submitted electronically through the official{" "}
          <strong>Google Form</strong>. We invite researchers, academicians,
          and industry professionals to submit original, innovative, and
          high-quality research papers aligned with the conference tracks.
          Submissions should present substantial contributions such as novel
          methodologies, experimental findings, case studies, or significant
          theoretical advancements.
        </p>

        {/* Submission Guidelines */}
        <div className="bg-white border rounded-lg p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Submission Guidelines
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              Manuscripts must strictly adhere to the{" "}
              <strong>prescribed formatting template</strong>.
            </li>
            <li>
              <strong>Regular Paper length:</strong> 5–7 pages, clearly
              presenting the research problem, methodology, key findings, and
              conclusions.
            </li>
            <li>
              All submissions must align with the conference tracks and
              demonstrate technical rigor and clarity.
            </li>
            <li>
              Papers must be formatted using the prescribed template and
              submitted <strong>only via the official submission link</strong>.
            </li>
            <li>
              Manuscripts should include sufficient technical detail to
              facilitate a thorough peer review while maintaining clarity and
              conciseness.
            </li>
          </ul>
        </div>

        {/* Evaluation & Selection */}
        <div className="bg-white border rounded-lg p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Evaluation & Selection
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              All submitted papers will undergo a rigorous{" "}
              <strong>peer-review process</strong> to ensure originality,
              technical quality, and relevance.
            </li>
            <li>
              Selected papers will be invited for presentation at the
              conference.
            </li>
            <li>
              Authors of selected papers may be offered the opportunity for
              full-paper submission to reputed journals or conference
              proceedings.
            </li>
          </ul>
        </div>

        {/* Templates */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Author Templates
          </h3>

          <p className="text-gray-700 mb-4">
            Please use the following templates for manuscript preparation:
          </p>

          <ul className="space-y-2">
            <li>
              <a
                href="https://docs.google.com/document/d/1XssosM7qHqDbrxYz0ha7PDvWOy0H4iwO/edit?usp=sharing&ouid=113683214684140309598&rtpof=true&sd=true"
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MS Word Template (DOC)
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/uc?export=download&id=1rgNgJ_GFefkJtQBE4OkOdw4K5p9Usu4S"
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LaTeX Formatting Macros (TEX)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesToAuthors;
