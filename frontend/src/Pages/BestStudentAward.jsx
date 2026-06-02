import React from "react";

const BestStudentAward = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12 text-justify">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Best Student Paper Award
        </h2>

        {/* Intro */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          A <strong>Best Student Paper Award</strong> will be presented for each
          conference track, recognizing outstanding and innovative research
          contributions made by student authors.
        </p>

        {/* Award Details */}
        <div className="bg-white border rounded-lg p-6 shadow-sm mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Award Details
          </h3>

          {/* Purpose */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Purpose
            </h4>
            <p className="text-gray-700">
              To acknowledge exceptional research quality, originality, and
              scholarly contribution from student authors in each conference
              track.
            </p>
          </div>

          {/* Eligibility */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Eligibility
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Primary author(s) must be registered students at the time of
                paper submission.
              </li>
              <li>
                Nominations must be endorsed by the student’s major
                advisor/mentor.
              </li>
              <li>
                Each advisor may nominate <strong>one paper per track</strong>.
              </li>
            </ul>
          </div>

          {/* Nomination Process */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Nomination Process
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Submit nominations through the official online portal
                (link to be announced).
              </li>
              <li>
                All nominations must be submitted before the specified
                deadline.
              </li>
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Inquiries
            </h4>
            <p className="text-gray-700">
              For any questions or clarifications regarding the Best Student
              Paper Award, please contact the <strong>Best Student Paper Award
              Chairs</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestStudentAward;
