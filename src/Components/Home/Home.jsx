import React from "react";
import Modal from "../Modal/Modal";
import Button from "@mui/material/Button";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog {open}
      </Button>

      <Modal opens={open} closeAction={closeModal} />
    </div>
  );
};

export default Home;
