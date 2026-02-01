import React from "react";

const BenefitsSponsorship = () => {
  const benefits = [
    {
      title: "Logo Recognition on Website",
      description:
        "Your organization’s logo will be prominently displayed on the official conference website with a direct link to your company’s website, ensuring continuous brand visibility.",
    },
    {
      title: "Logo Recognition in Conference Program",
      description:
        "Your logo will be featured in the official conference program distributed to all delegates, enhancing brand recall among academic and industry participants.",
    },
    {
      title: "Promotional Video Showcase",
      description:
        "A short promotional video of your organization will be showcased during online sessions, offering a powerful platform to highlight your products, services, or innovations.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Benefits of Sponsorship
        </h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Benefit {index + 1}
              </h3>
              <p className="text-gray-700 font-medium mb-2">
                {benefit.title}
              </p>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSponsorship;
