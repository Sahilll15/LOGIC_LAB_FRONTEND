import React, { useEffect, useState } from "react";
import Alternates from "../components/Layout/Toodoo";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo, getTodosByUserId, deleteTodo } from "../redux/todo/todoActions";
import { fetchImpDates } from "../redux/impDates/impDateActions";
import ImpDatesCard from "../components/ImpDatesCard";
import { SlCalender } from "react-icons/sl";

const Notification = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state?.todo?.todos) || [];
  const impDates = useSelector((state) => state?.impDate?.impDates);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = async () => {
    await dispatch(createTodo({
      title: newTask,
    }));
    setNewTask("");
    await dispatch(getTodosByUserId());
  };

  const handleUpdate = async (id) => {
    await dispatch(updateTodo(id));
    await dispatch(getTodosByUserId());
  };

  useEffect(() => {
    dispatch(getTodosByUserId());
    dispatch(fetchImpDates());
  }, [dispatch]);

  return (
    <Alternates >
      <div className="text-black">
      <div className="mt-16 text-3xl text-black">To-DO</div>
      <div>
        <hr />
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap">
          <input
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
            className="rounded-md px-3 py-2 min-w-96 mx-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter new task"
          />
          <button
            onClick={handleAddTask}
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Add New Task
          </button>
        </div>
      </div>

      <div className="mt-8">
        {Array.isArray(todos) && todos?.map((task) => (
          <div key={task?._id} className="p-2 m-2 bg-white border rounded-lg max-w-6xl border-gray-300 shadow-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task?.completed}
                onChange={() => handleUpdate(task?._id)}
              />
              <span className="mx-4 font-semibold">{task?.title}</span>
            </div>
            <div className="ml-12 mt-2 flex items-center">
              <SlCalender className="mt-1 mr-2"/>
              {new Date(task?.createdAt).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
      </div>
    </Alternates>
  );
};

export default Notification;
