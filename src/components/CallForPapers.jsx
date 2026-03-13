import React from "react";

export default function CallForPapers() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-primary mb-6">Call for Papers</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-5">
          <li>Nanomaterials & Nanotechnology</li>
          <li>Biomedical Engineering</li>
          <li>Advanced Functional Materials</li>
          <li>Energy & Environmental Nanoscience</li>
        </ul>
      </div>
    </section>
  );
}
