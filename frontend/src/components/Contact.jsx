import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Contact <span className="text-blue-600">Us</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600">
            For conference-related queries, registration support, and general
            assistance, please reach out to our coordinators.
          </p>
        </div>

        {/* Coordinators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Faculty */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-600 p-8">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              Faculty Coordinators
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-lg">
                  Dr. Pritam Kumar Dikshit
                </p>
                <p className="text-gray-600">📞 +91 7896889045</p>
              </div>

              <div>
                <p className="font-semibold text-lg">
                  Dr. Prangya Ranjan Rout
                </p>
                <p className="text-gray-600">📞 +91 8917379390</p>
              </div>

              <div>
                <p className="font-semibold text-lg">
                  Dr. Manoj Kumar
                </p>
                <p className="text-gray-600">📞 +91 9219834655</p>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-600 p-8">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Student Coordinators
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-lg">
                  Mr. Pratyush Kumar Behera
                </p>
                <p className="text-gray-600">📞 +91 8118018300</p>
              </div>

              <div>
                <p className="font-semibold text-lg">
                  Ms. Akshika Sharma
                </p>
                <p className="text-gray-600">📞 +91 9805723172</p>
              </div>

              <div>
                <p className="font-semibold text-lg">Ms. Anjali</p>
                <p className="text-gray-600">📞 +91 6397341638</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-xl font-bold mb-3">📧 Email</h4>

            <a
              href="mailto:ricewves@nitj.ac.in"
              className="text-blue-600 hover:underline"
            >
              ricewves@nitj.ac.in
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-xl font-bold mb-3">🌐 Website</h4>

            <a
              href="https://www.ricewves.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.ricewves.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}