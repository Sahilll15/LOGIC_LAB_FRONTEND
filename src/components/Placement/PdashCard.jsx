import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from "react-router-dom";

const PDashCard = ({ company }) => {
    return (
        <div className="bg-white max-w-96 shadow-lg min-w-96 p-4 rounded-md font-semibold text-base">
            <div>{company.company}</div>
            {/* <div className="font-normal">{jobRole}</div> */}
            <div className="flex flex-wrap gap-4 mt-1 font-normal">
                <div className="mt-1 text-xl">
                    <BsCalendar2Date />
                </div>
                <div>{company.endDate}</div>
            </div>

            <div className="font-normal mt-4">SKills :{company.skills.map((skill) => (
                <span key={skill} className="bg-slate-200 text-slate-800 p-1 rounded-md mr-1">{skill}</span>

            ))}</div>

            <div className="flex flex-row mt-4">
                <Link to={`/applicants/${company._id}`}>
                    <button className=" bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600">
                        View Participants
                    </button>
                </Link>
            </div>
            <div className="mt-3 mb-1 text-base  text-blue-500">
                TOTAL OPENINGS : 5
            </div>
        </div>
    );
};

export default PDashCard;