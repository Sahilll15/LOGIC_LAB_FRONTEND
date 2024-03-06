import React, { useEffect, useState } from "react";
import Post from "../components/Forum/Post";
import PostCard from "../components/Forum/PostCard";
import Alternates from "../components/Layout/User";

// import SuggestedEvents from "../components/Forum/SuggestedEvents";

const Forum = () => {
  const [forums, setForums] = useState([]);
  const [getForum, setGetForum] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authtoken");

        const response = await fetch(
          "http://localhost:4000/api/v1/forum/getforums",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setForums(data.forums);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [getForum]);

  return (
    <Alternates>
    <div className="bg-gray-100 min-h-screen ">
      <br />
      <div class="md:flex">
        <div class="md:w-3/4">
          <div className="flex justify-center ">
            {/* <iframe
              src="https://calendar.google.com/calendar/embed?src=a34ff2a03c577095277d42a198f7139365d95924e5201a781a236b554ab38d86%40group.calendar.google.com&ctz=Asia%2FKolkata"
              frameborder="0"
              className="w-[400px] h-[400px] pr-5 pl-3"
            ></iframe> */}
            <div className=" w-full p-2 md:w-2/3">
              <Post setGetForum={setGetForum} />
              <PostCard className="mt-12" forums={forums} />
            </div>
          </div>
        </div>
        {/* <div class="hidden md:block w-1/4 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl bg-white m-2 p-4">
          <SuggestedEvents />
        </div> */}
      </div>
    </div>
    </Alternates>
  );
};

export default Forum;
