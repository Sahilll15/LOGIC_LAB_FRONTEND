import React from "react";
import Alternate from "../components/Layout/User";

const CompanyDetail = () => {
  return (
    <Alternate>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <img
            className="mx-auto mb-8 rounded-md"
            src="https://img.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg"
            alt="Company Building"
          />
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Company Name</h1>
            <p className="text-gray-600 mt-2">Company Description</p>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold mb-2">Job Role: Frontend Developer</h2>
              <h2 className="text-lg font-semibold mb-2">Required skills: <span className="font-normal">HTML, CSS, Tailwind</span></h2>
              <h2 className="text-lg font-semibold mt-4 mb-2">Package in LPA:</h2>
              <p className="text-gray-700">8.5 LPA</p>
              <h2 className="text-lg font-semibold mt-4 mb-2">Last Date to Register:</h2>
              <p className="text-gray-700">March 20, 2024</p>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                I'm Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    </Alternate>
  );
};

export default CompanyDetail;
