"use client";
// Import necessary dependencies
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export default function CookiePolicyModal() {
  const [open, setOpen] = useState(false); // State to control the open/close of the modal

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show Cookie Policy</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionProps={{ appear: true, timeout: 1000 }} // Add transition animation
        style={{ transform: "translateY(100%)" }} // Start from the bottom of the screen
      >
        <DialogTitle>Your Privacy Choices</DialogTitle>
        <DialogContent>
          This website uses cookies and other tracking technologies to enhance
          user experience and to analyze performance and traffic on our
          website...
          {/* Add the rest of your text here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Accept Cookies
          </Button>
          <Button onClick={handleClose} color="primary">
            Reject All
          </Button>
          <Button onClick={handleClose} color="primary">
            Do Not Sell or Share My Personal Information
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
