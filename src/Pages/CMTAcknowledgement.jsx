import React from "react";

const CMTAcknowledgement = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12 text-justify">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          CMT Acknowledgement
        </h2>

        {/* Acknowledgement Text */}
        <div className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The Microsoft CMT service was used for managing the peer-review
            process for this conference. This service was provided free of
            charge by Microsoft, which covered all associated expenses,
            including costs related to Azure cloud services, software
            development, and technical support.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This conference uses Microsoft’s{" "}
            <strong>Conference Management Toolkit (CMT)</strong> for paper
            submission, review, and overall conference management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CMTAcknowledgement;
