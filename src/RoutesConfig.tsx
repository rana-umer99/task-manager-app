import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AllTasks from "./pages/AllTasks";
import CreateTask from "./pages/CreateTask";
import BulkDelete from "./pages/BulkDelete";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list-tasks" />} />
      <Route path="/list-tasks" element={<AllTasks />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/bulk-delete" element={<BulkDelete />} />
    </Routes>
  );
};

export default RoutesConfig;
