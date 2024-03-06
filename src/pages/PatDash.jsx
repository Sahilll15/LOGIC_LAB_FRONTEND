import React, { useState } from "react";
import Alternate from "../components/Layout/User";
import PieChart from "../components/Chart/Piechart";

const PatDash = () => {
  const [showPlacementModal, setShowPlacementModal] = useState(false);
  const [showPollsModal, setShowPollsModal] = useState(false);

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

  // Define static data for the pie chart
  const pieChartData = [
    { label: "Category 1", value: 30 },
    { label: "Category 2", value: 40 },
    { label: "Category 3", value: 20 },
    { label: "Category 4", value: 10 },
  ];

  return (
    <Alternate>
      <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
        <div className="flex flex-wrap gap-4 justify-end">
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

                <form action="#" method="post">
                  <label htmlFor="question">Question:</label>
                  <br />
                  <input type="text" id="question" name="question" required />
                  <br />
                  <br />
                  <label htmlFor="option1">Option 1:</label>
                  <br />
                  <input type="text" id="option1" name="option1" required />
                  <br />
                  <label htmlFor="option2">Option 2:</label>
                  <br />
                  <input type="text" id="option2" name="option2" required />
                  <br />
                  <label htmlFor="option3">Option 3:</label>
                  <br />
                  <input type="text" id="option3" name="option3" required />
                  <br />
                  <label htmlFor="option4">Option 4:</label>
                  <br />
                  <input type="text" id="option4" name="option4" required />
                  <br />
                  <br />
                  <input type="submit" defaultValue="Submit" />
                </form>

                {/* Your polls modal content goes here */}
                <button
                  onClick={closePollsModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <h2>Dashboard</h2>
        <PieChart data={pieChartData} />
        {/* Other content */}
      </div>
    </Alternate>
  );
};

export default PatDash;
