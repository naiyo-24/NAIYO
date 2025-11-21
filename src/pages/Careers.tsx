// Careers Page
import React from "react";

export default function Careers() {
  return (
    <div className="pt-16 px-8">
      <h1 className="text-5xl font-bold mb-6">Careers at Naiyo24</h1>
      <p className="text-lg text-gray-700 mb-4">
        Join our team and help us build innovative digital solutions! Explore
        open positions and grow your career with us.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>UI/UX Designer</li>
          <li>Digital Marketing Specialist</li>
          <li>Business Analyst</li>
        </ul>
      </div>
    </div>
  );
}
