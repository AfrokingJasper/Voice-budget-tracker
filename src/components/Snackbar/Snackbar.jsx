import React from "react";
import { Snackbar } from "@mui/material";
// import Snackbar from "@mui/material";
// import MuiAlert from "@mui/lab/Alert";
import Alert from "@mui/material/Alert/Alert";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
