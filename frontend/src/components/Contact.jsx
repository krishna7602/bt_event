import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Contact Us
      </h2>
      <div className="bg-white border rounded-xl p-8 shadow-sm w-full">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Faculty Coordinators */}
          <div className="bg-gray-50 rounded-lg p-6 border">
            <h3 className="text-xl font-bold text-blue-700 mb-5">
              Faculty Coordinators
            </h3>

            <div className="space-y-5">
              <div>
                <p className="font-semibold">Dr. Pritam Kumar Dikshit</p>
                <p className="text-gray-600">📞 +91 7896889045</p>
              </div>

              <div>
                <p className="font-semibold">Dr. Prangya Ranjan Rout</p>
                <p className="text-gray-600">📞 +91 8917379390</p>
              </div>

              <div>
                <p className="font-semibold">Dr. Manoj Kumar</p>
                <p className="text-gray-600">📞 +91 9219834655</p>
              </div>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="bg-gray-50 rounded-lg p-6 border">
            <h3 className="text-xl font-bold text-green-700 mb-5">
              Student Coordinators
            </h3>

            <div className="space-y-5">
              <div>
                <p className="font-semibold">Mr. Pratyush Kumar Behera</p>
                <p className="text-gray-600">📞 +91 8118018300</p>
              </div>

              <div>
                <p className="font-semibold">Ms. Akshika Sharma</p>
                <p className="text-gray-600">📞 +91 9805723172</p>
              </div>

              <div>
                <p className="font-semibold">Ms. Anjali</p>
                <p className="text-gray-600">📞 +91 6397341638</p>
              </div>
            </div>
          </div>

        </div>

        {/* Email & Website */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="border rounded-lg p-5">
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <a
              href="mailto:ricewves@nitj.ac.in"
              className="text-blue-600 hover:underline"
            >
              ricewves@nitj.ac.in
            </a>
          </div>

          <div className="border rounded-lg p-5">
            <h4 className="font-semibold text-lg mb-2">Website</h4>
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