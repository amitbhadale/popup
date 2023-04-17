import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Dialog from "../Dialog/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(true);

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

      <TextField
        error={pin > 99999 || pin === ""}
        id="outlined-error"
        label="Pin"
        helperText={
          pin > 99999 ? "Pin is incorrect" : pin === "" ? "Pin is required" : ""
        }
        type="number"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      {pin}

      <div className="">
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Hover to show Popup dialog {`${show}`}
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <Dialog show={show}></Dialog>
      </div>
    </div>
  );
};

export default Home;
