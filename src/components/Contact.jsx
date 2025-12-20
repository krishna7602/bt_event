import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-700 mb-8">
          For any queries regarding the conference, sponsorship, or participation,
          please feel free to reach out to us using the details below.
        </p>

        {/* Contact Details */}
        <div className="bg-white border rounded-lg p-6 shadow-sm max-w-3xl">
          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
            <p className="text-gray-700 leading-relaxed">
              Department of Electrical Engineering,<br />
              National Institute of Technology Patna,<br />
              Ashok Rajpath, Mahendru,<br />
              Patna, Bihar – 800005, India
            </p>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-700">
              <a
                href="mailto:nasl@nitp.ac.in"
                className="text-blue-600 hover:underline"
              >
                nasl@nitp.ac.in
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Call</h3>
            <p className="text-gray-700">
              +91-7840809129, +91-9635102410, +91-9304640178
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
