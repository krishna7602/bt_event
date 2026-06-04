import React from "react";

const Awards = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Awards
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600">
            The conference recognizes outstanding contributions through awards
            presented for exceptional oral and poster presentations.
          </p>
        </div>

        {/* Awards Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Best Oral Presentation Award */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-5">
              Best Oral Presentation Award
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This award recognizes the most outstanding oral presentation
              delivered during the conference. Evaluation will be based on the
              originality and significance of the research, quality of
              presentation, clarity of communication, scientific content, and
              the presenter's ability to effectively engage with the audience
              during discussions and question-answer sessions.
            </p>
          </div>

          {/* Best Poster Presentation Award */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-600 p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-5">
              Best Poster Presentation Award
            </h3>

            <p className="text-gray-700 leading-relaxed">
              This award is presented to the most impactful and well-designed
              poster presentation. Judging criteria include the quality and
              relevance of the research, visual presentation, organization of
              content, clarity of explanation, innovation, and the presenter's
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