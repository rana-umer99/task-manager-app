import React, { useContext, useEffect } from "react";
import TaskListing from "../components/common/TaskListing";
import AppContext from "../context";
import { useNavigate } from "react-router-dom";

const BulkDelete: React.FC = () => {
  const navigate = useNavigate();
  const { allTasks, setToast } = useContext(AppContext);

  useEffect(() => {
    if (!allTasks.length) {
      setToast("No task to delete..! Please add one");
      navigate("/create-task");
    }
  }, [allTasks]);

  return (
    <div className="container px-4 lg:px-4 mx-auto py-8">
      <TaskListing isDeleting />
    </div>
  );
};

export default BulkDelete;
