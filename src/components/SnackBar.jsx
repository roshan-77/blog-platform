import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";

const SnackBar = ({
  loadSnackBar,
  handleCloseSnackBar,
  snackbarAlertProps,
}) => {
  return (
    <>
      <Snackbar
        open={loadSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackbarAlertProps.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarAlertProps.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
