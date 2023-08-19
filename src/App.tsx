import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';

import Header from './components/common/Header';
import AllTasks from './pages/AllTasks';
import CreateTask from './pages/CreateTask';
import BulkDelete from './pages/BulkDelete';
import AppContext from './context';

function App() {
  const { toastMessage, setToast } = useContext(AppContext);

  const handleSnackbarClose = () => {
    setToast("");
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/list-tasks" />} />
        <Route path="/list-tasks" element={<AllTasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/bulk-delete" element={<BulkDelete />} />
      </Routes>
      <Snackbar open={!!toastMessage.length} autoHideDuration={4000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleSnackbarClose} severity={toastMessage.includes("Please add one") ? "warning" : "success"} variant="filled">
          {toastMessage}
        </Alert>
      </Snackbar>
    </div >
  );
}

export default App;
