import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const Card = ({ data }) => {

  const user = useSelector(state => state.user.user)


  const navigate = useNavigate()
  return (
    <div className="bg-white max-w-72 shadow-lg min-w-80 p-4 rounded-md font-semibold text-base">
      <div>{data.company}</div>
      <div className="font-normal">job role</div>
      <div className="flex flex-wrap gap-4 mt-1 font-normal">
        <div className="mt-1 text-xl">
          <BsCalendar2Date />
        </div>
        <div>ends on {data.endDate}</div>
      </div>

      <div className="font-normal mt-4">SKills : {
        data.skills.map((skill, index) => {
          return <span key={index} className="bg-slate-200 text-slate-800 p-1 rounded-md mr-1">{skill}</span>

        })}
      </div>

      <div className="flex flex-row mt-4">
        <button onClick={() => {
          navigate(`/company/${data._id}`)
        }} className=" bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600">
          View Details
        </button>
        <div className=" border-2 ml-3 p-2 rounded-md border-slate-200 hover:border-slate-400 flex items-center">
          <i class="bi bi-person text-xl "></i>
          <span className="ml-1">Applicants: {data.applicants.length || 0}</span>
        </div>
      </div>

    </div>
  );
};

export default Card;