import React from "react";
export default function Speakers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Keynote Speakers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=>(
            <div key={i} className="p-6 bg-white shadow rounded">
              <h3 className="font-semibold">Dr. Speaker {i}</h3>
              <p className="text-sm text-gray-600">International Researcher</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
