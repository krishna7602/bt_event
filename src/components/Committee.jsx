import React from "react";

export default function Committee() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Committee</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-5">
          <li>Dr. Ramesh Kumar (Chair)</li>
          <li>Dr. Priya Sharma (Vice Chair)</li>
          <li>Dr. Suresh Patel (Technical Chair)</li>
          <li>Dr. Anjali Gupta (Publications Chair)</li>
        </ul>
      </div>
    </section>
  );
}