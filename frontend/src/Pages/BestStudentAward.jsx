import React from "react";

const Awards = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12 xl:px-16 text-justify">
      <div className="w-full">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Awards
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          The conference recognizes outstanding contributions through awards
          presented for exceptional oral and poster presentations.
        </p>

        <div className="space-y-8">
          {/* Best Oral Presentation Award */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Best Oral Presentation Award
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This award recognizes the most outstanding oral presentation
              delivered during the conference. Evaluation will be based on the
              originality and significance of the research, quality of
              presentation, clarity of communication, scientific content, and
              the presenter’s ability to effectively engage with the audience
              during discussions and question-answer sessions.
            </p>
          </div>

          {/* Best Poster Presentation Award */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Best Poster Presentation Award
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This award is presented to the most impactful and well-designed
              poster presentation. Judging criteria include the quality and
              relevance of the research, visual presentation, organization of
              content, clarity of explanation, innovation, and the presenter’s
              ability to communicate the work effectively to conference
              participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;