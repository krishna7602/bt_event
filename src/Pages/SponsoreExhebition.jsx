import React from "react";

const SponsoreExhebition = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sponsorship & Exhibitions
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
          Department of Electrical Engineering, National Institute of Technology (NIT),
          Patna is pleased to announce the <strong>International Conference on
          Next-Generation Adaptive Research and Innovations (ICNARI-2026)</strong>,
          scheduled during <strong>8–9 May 2026</strong> at NIT Jalandhar.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Call For Sponsorship
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Submit Interest Form
          </button>
        </div>

        {/* Sponsor Categories */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Sponsorship Categories
        </h3>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Facilities</th>
                <th className="p-3 text-left">Support (INR)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                {
                  cat: "Platinum",
                  sup: "₹ XXXX or above",
                  fac: "Exhibition Stand, Technical Presentation Slot, Registration Waived for 3 Participants, Promotional Banner, Logo in Brochure & Banner, Full-Page A4 Ad in Abstract Book",
                },
                {
                  cat: "Gold",
                  sup: "₹ XXXX or above",
                  fac: "Exhibition Stand, Technical Presentation Slot, Registration Waived for 2 Participants, Logo in Brochure & Banner, Full-Page A4 Ad in Abstract Book",
                },
                {
                  cat: "Silver",
                  sup: "₹ XXXX or above",
                  fac: "Exhibition Stand, Complimentary Registration for 2, Logo in Brochure & Banner",
                },
                {
                  cat: "Bronze",
                  sup: "₹ XXXX or above",
                  fac: "Complimentary Registration for 2, Logo on Banner",
                },
                {
                  cat: "Academic / Industrial",
                  sup: "₹ XXXX",
                  fac: "Exhibition stall with two tables and electrical connections",
                },
              ].map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 font-semibold">{item.cat}</td>
                  <td className="p-3">{item.fac}</td>
                  <td className="p-3">{item.sup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mb-10">
          * 18% GST will be charged in addition to the basic amount.
        </p>

        {/* Additional Sponsorship */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Additional Sponsorship Opportunities
        </h3>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-700 mb-12 list-disc list-inside">
          <li>Delegate Kit Sponsorship</li>
          <li>Conference Lunch – XXXX INR / Day</li>
          <li>High Tea – XXXX INR / Day</li>
          <li>Conference Breakfast – XXXX INR / Day</li>
          <li>Tea Break – XXXX INR / Break</li>
          <li>Plenary Lecture – XXXX INR / Lecture</li>
          <li>Poster Sessions – XXXX INR</li>
          <li>Abstract Book – XXXX INR</li>
          <li>Conference Proceedings – XXXX INR</li>
          <li>Conference Banner – XXXX INR</li>
        </ul>

        <p className="text-gray-700 mb-12">
          If the above options do not fit your marketing needs, sponsorship
          opportunities can be customized as per your requirements.
        </p>

        {/* Important Dates */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Important Dates
        </h3>
        <p className="text-gray-700 mb-10">
          Last date for receipt of advertisement materials: <strong>XXXX</strong>
        </p>

        {/* Bank Details */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Bank Account Details
        </h3>

        <div className="bg-white border rounded-lg p-6 text-gray-700 max-w-lg">
          <p><strong>Bank Name:</strong> Indian Bank</p>
          <p><strong>Branch:</strong> NIT Patna Campus</p>
          <p><strong>Account Name:</strong> NIT Patna CF Account</p>
          <p><strong>Account Number:</strong> 50433562364</p>
          <p><strong>IFSC Code:</strong> IDIB000B810</p>
          <p><strong>MICR Code:</strong> 800019027</p>
        </div>
      </div>
    </section>
  );
};

export default SponsoreExhebition;
