import React, { useContext } from "react";
import RoutesConfig from "./RoutesConfig";
import { Alert, Snackbar } from "@mui/material";

import Header from "./components/common/Header";
import AppContext from "./context";

function App() {
  const { toastMessage, setToast } = useContext(AppContext);

  const handleSnackbarClose = () => {
    setToast("");
  };

  return (
    <div className="App">
      <Header />
      <RoutesConfig />
      <Snackbar
        open={!!toastMessage.length}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            toastMessage.includes("Please add one") ? "warning" : "success"
          }
          variant="filled"
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
