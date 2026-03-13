import React from "react";

export default function Registration() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-primary mb-4">Registration</h2>
        <p className="text-gray-700 mb-4">
          Online registration is mandatory for all participants.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded">
          Register Now
        </button>
      </div>
    </section>
  );
}
