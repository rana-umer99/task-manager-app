import React, { useState, useContext } from "react";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const CreateTask: React.FC = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(AppContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      isCompleted: false,
      label: taskName,
      description: taskDescription,
    };
    addTask(newTask);
    setTaskName("");
    setTaskDescription("");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full sm:w-96 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="taskName"
            name="taskName"
            className="task-name"
            placeholder="Task Name"
            maxLength={80}
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            id="taskDescription"
            name="taskDescription"
            className="task-description"
            placeholder="Task Description"
            maxLength={80}
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button type="submit" className="btn-blue mx-auto">
            <FaPlus className="text-xs md:text-sm mr-1" />
            <span className="hidden md:inline">Add Task</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
