import React, { useEffect, useState } from "react";
import Alternate from "../components/Layout/User";
import PieChart from "../components/Chart/Piechart";
import { toast } from "react-toastify";
import axios from "axios";
// import Card from "../components/Placement/Card";
import PDashCard from "../components/Placement/PdashCard";
import { array } from "i/lib/util";

const PatDash = () => {
  const [showPlacementModal, setShowPlacementModal] = useState(false);
  const [showPollsModal, setShowPollsModal] = useState(false);
  const [piechartPoll, setpiechartpoll] = useState([]);
  const [currentPoll, setCurrentPoll] = useState({});
  const [placements, setPlacements] = useState([]);

  const [pollData, setPollData] = useState({
    title: "",
    options: ["", "", "", ""],
  });

  const openPlacementModal = () => {
    setShowPlacementModal(true);
  };

  const closePlacementModal = () => {
    setShowPlacementModal(false);
  };

  const openPollsModal = () => {
    setShowPollsModal(true);
  };

  const closePollsModal = () => {
    setShowPollsModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/api/v1/polls/createPoll`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
          },
          body: JSON.stringify(pollData),
        }
      );


      if (response.ok) {

        toast.success("Poll created successfully!");
        console.log("Poll created successfully!");
        getPieChartDataPoll(response.data._id);
      } else {

        toast.error("Failed to create poll");
        console.error("Failed to create poll");
      }
    } catch (error) {
      toast.error("Error");
      console.error("Error while creating poll", error);
    }


    closePollsModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPollData({
      ...pollData,
      [name]: value,
    });
  };

  const getPieChartDataPoll = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_HOST}/api/v1/polls/getPollPieChart/65e8d901aac8aabcd674445d`

    );

    if (response.status === 200) {
      console.log(response.data);
      setpiechartpoll(response.data);
    }
  };

  const fetchPlacements = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_HOST}/api/v1/placements/getAllPlacement`
      );
      console.log(response);

      if (response.status === 200) {

        setPlacements(response.data);
        console.log(response.data)
      } else {
        console.error("Failed to fetch placements");
      }
    } catch (error) {
      console.error("Error while fetching placements", error);
    }
  };

  const handleOptionChange = (e, index) => {
    const { value } = e.target;
    setPollData((prevData) => {
      const options = [...prevData.options];
      options[index] = value;
      return {
        ...prevData,
        options,
      };
    });
  };

  useEffect(() => {
    getPieChartDataPoll();
    fetchPlacements();
  }, []);

  return (
    <Alternate>
      <div className="flex flex-col py-10 px-16 h-auto w-full">
        <div className="flex flex-wrap gap-4 justify-end mb-3">
          <div>
            <div
              onClick={openPlacementModal}
              className="p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-400"
            >
              Create Placement
            </div>
            {showPlacementModal && (
              <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg p-8">
                  <h1 className="text-xl font-semibold mb-4">
                    CREATE PLACEMENT
                  </h1>
                  {showPlacementModal && (
                    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white rounded-lg p-8">
                        <h1 className="text-xl font-semibold mb-4">
                          CREATE PLACEMENT
                        </h1>

                        <form className="max-w-xl mx-auto min-w-96">
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Description
                            </label>
                            <textarea
                              id="description"
                              name="description"
                              rows="3"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            ></textarea>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="role"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Role
                            </label>
                            <input
                              type="text"
                              id="role"
                              name="role"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="package"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Package
                            </label>
                            <input
                              type="text"
                              id="package"
                              name="package"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="endDate"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              End Date
                            </label>
                            <input
                              type="date"
                              id="endDate"
                              name="endDate"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="skills"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Skills Required
                            </label>
                            <input
                              type="text"
                              id="skills"
                              name="skills"
                              className="border-gray-300 border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                              Submit
                            </button>
                          </div>
                        </form>

                        {/* Your placement modal content goes here */}

                        <button
                          onClick={closePlacementModal}
                          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={closePlacementModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            onClick={openPollsModal}
            className="p-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-400"
          >
            Create Polls
          </div>
          {showPollsModal && (
            <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-8">
                <h1 className="text-xl font-semibold mb-4">
                  LET'S CREATE A POLL!
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm w-96 font-medium text-gray-700"
                    >
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="question"
                      value={pollData.question}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                      placeholder="Enter poll title"
                      required
                    />
                  </div>
                  {pollData.options.map((option, index) => (
                    <div className="mb-4" key={index}>
                      <label
                        htmlFor={`option${index + 1}`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Option {index + 1}:
                      </label>
                      <input
                        type="text"
                        id={`option${index + 1}`}
                        name={`option${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(e, index)}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                        placeholder={`Enter option ${index + 1}`}
                        required
                      />
                    </div>
                  ))}

                  <div className="flex justify-between">
                    <button
                      onClick={openPollsModal}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      Create Poll
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="">
          <h2 className="pt-5 font-bold text-black text-2xl mb-4">Campus Placement Drives </h2>
          <div className="flex flex-wrap  gap-4 items-center">
            {
              placements.map((placement) => {
                return <PDashCard company={placement} />
              })
            }
          </div>
        </div>
        <div className="mt-4">
          <h2 className="pt-5 font-bold text-black text-2xl">Analysis of the Latest Poll </h2>
          <PieChart data={piechartPoll} />
        </div>
        {/* <PieChart data={pieChartData} /> */}
        {/* Other content */}
      </div>
    </Alternate>
  );
};

export default PatDash;