import React from "react";
import { BsCalendar2Date } from "react-icons/bs";

const Card = ({ data }) => {
  return (
    <div className="bg-white max-w-72 shadow-lg min-w-80 p-4 rounded-md font-semibold text-base">
      <div>Company Name</div>
      <div className="font-normal">job role</div>
      <div className="flex flex-wrap gap-4 mt-1 font-normal">
        <div className="mt-1 text-xl">
          <BsCalendar2Date />
        </div>
        <div>5 march 2024</div>
      </div>

      <div className="font-normal mt-4">SKills : {
        data.skills.map((skill, index) => {
          return <span key={index} className="bg-slate-200 text-slate-800 p-1 rounded-md mr-1">{skill}</span>

        })}

      </div>

      <div className="flex flex-row mt-4">
        <button className=" bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600">
          Apply Now
        </button>
        <div className=" border-2 ml-3 p-2 rounded-md border-slate-200 hover:border-slate-400 flex items-center">
          <i class="bi bi-person text-xl "></i>
          <span className="ml-1">Applicants: 69</span>
        </div>
      </div>
      <div className="mt-3 mb-1 text-base  text-blue-500">TOTAL OPENINGS : 5</div>

    </div>
  );
};

export default Card;