import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import { seachUser } from "../../redux/user/userActions";
import { getUserProfile } from "../../redux/user/userActions";
import { getLogedinUser } from "../../redux/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [username, setUsername] = useState("");
  const location = useLocation();

  const searchedUser = useSelector((state) => state?.userDetails?.searchedUser);

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    window.location.reload();
  };

  const handleSearchBlur = () => {

    setUsername("");
  };

  useEffect(() => {
    if (username !== "") {
      dispatch(seachUser(username));
      dispatch(getUserProfile(username));
    }
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getLogedinUser());
  }, [dispatch]);

  return (
    <div>
      <div className="sideParent">
        <span
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
          onclick="openSidebar()"
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[275px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <img
                src={user?.profile}
                className="w-[40px] h-[40px] rounded-full border"
              />
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                <div className="flex-col">
                  <p>
                    {" "}
                    {user?.username} &nbsp;{" "}
                    <i className="fa-solid fa-coins fa-xl text-yellow-600"></i>
                    &nbsp; &nbsp;
                    {user?.coins}
                  </p>
                </div>
              </h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]" />
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm" />
            <input
              type="text"
              placeholder="Find people"
              name="username"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
              onBlur={handleSearchBlur}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
          {searchedUser?.map((user) => (
            <NavLink to={`/profile/${user?.username}`}>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <img
                  src={user?.profile}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border border-blue-400"
                />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  {user?.username}
                </span>
              </div>
            </NavLink>
          ))}

          <NavLink to={"/home"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/home" ? "bg-blue-500" : ""
                } text-white`}
            >
              <i className="bi bi-house-door"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Home
              </span>
            </div>
          </NavLink>

          <NavLink to={"/notes"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/notes" ? "bg-blue-500" : ""
                } text-white`}
            >
              <i className="bi bi-house-door"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Notes
              </span>
            </div>
          </NavLink>



          <NavLink to={"/todo"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/notification" ? "bg-blue-500" : ""
                }`}
            >
              <i className="bi bi-bell text-white"></i>
              <span className="text-[15px] ml-4 font-bold text-gray-200">
                My List
              </span>
            </div>
          </NavLink>

          <NavLink to={"/forum"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/forum" ? "bg-blue-500" : ""
                }`}
            >
              <i className="bi bi-bell text-white"></i>
              <span className="text-[15px] ml-4 font-bold text-gray-200">
                Forum
              </span>
            </div>
          </NavLink>

          <NavLink to={"/addnotes"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/addnotes" ? "bg-blue-500" : ""
                }`}
            >
              <i className="bi bi-file-earmark-plus text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Add notes
              </span>
            </div>
          </NavLink>

          <NavLink to={"/communities"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/communities" ? "bg-blue-500" : ""
                }`}
            >
              <i className="bi bi-people text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Communities
              </span>
            </div>
          </NavLink>



          <NavLink to={"/books"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/books" ? "bg-blue-500" : ""
                }`}
            >
              <i class="bi bi-book text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Book Library
              </span>
            </div>
          </NavLink>

          <NavLink to={"/resumepredictor"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/books" ? "bg-blue-500" : ""
                }`}
            >ß
              <i class="bi bi-book text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Resume Reviewßß
              </span>
            </div>
          </NavLink>




          <NavLink to={"/dashboard"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/dashboard" ? "bg-blue-500" : ""
                }`}
            >
              <i className="bi bi-clipboard-data text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Dashboard
              </span>
            </div>
          </NavLink>


          <NavLink to={`/profile/${user?.username}`}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === `/profile/${user?.username}`
                ? "bg-blue-500"
                : ""
                }`}
            >
              <i className="bi bi-person-circle text-white"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Profile
              </span>
            </div>
          </NavLink>

          {/* <NavLink to={"/communities"}>
            <div
              className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 ${location.pathname === "/communities" ? "bg-blue-500" : ""
                }`}
            >
              <i class="bi bi-gear"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Communities
              </span>
            </div>
          </NavLink> */}

          {user?.role == "superuser" && (
            <>
              <NavLink to={"/admin"}>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                  <i className="bi bi-person-fill-gear text-white"></i>
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    Admin
                  </span>
                </div>
              </NavLink>


              <NavLink to={"/patdash"}>
                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                  <i className="bi bi-person-fill-gear text-white"></i>
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    PatDash
                  </span>
                </div>
              </NavLink>
            </>
          )}

          <div className="my-4 bg-gray-600 h-[1px]" />

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={() => {
              navigate("/otp");
            }}
          >
            <i className="bi bi-gear-wide-connected text-white"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Reset Password
            </span>
          </div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={() => {
              handleLogout();
            }}
          >
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </div>
      </div>

      <div className="MobileBtm">
        {/* component */}
        <div className="w-full">
          <section
            id="bottom-navigation"
            className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
          >
            <div id="tabs" className="flex justify-between mx-5">
              <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
                <div className="flex justify-around py-3">
                  <a href="#" className="flex items-center justify-center flex-1 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      {/* Insert your icon for the first item here */}
                      <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zM9 4a1 1 0 00-.883.486l-3 5a1 1 0 00.164 1.325l3 2.5a1 1 0 001.352-.055l3-3a1 1 0 00-.664-1.69l-2.72.434 2.72-4.533A1 1 0 0011 5a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1">Home</span>
                  </a>
                  <a href="#" className="flex items-center justify-center flex-1 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      {/* Insert your icon for the second item here */}
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-9a1 1 0 11-2 0 1 1 0 012 0zm0 2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1">Notes</span>
                  </a>
                  <a href="#" className="flex items-center justify-center flex-1 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      {/* Insert your icon for the third item here */}
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2-9a2 2 0 114 0 2 2 0 01-4 0zm1-5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1">Dashboard</span>
                  </a>
                </div>
              </div>







            </div>
          </section>
        </div>;

      </div>
    </div>
  );
};

export default SideBar;