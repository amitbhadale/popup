import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Dialog from "../Dialog/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Shipping from "../Shipping/Shipping";
import Notify from "../Notify/Notify";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Notify></Notify>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
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
      {pin} */}

      {/* <div className="">
        <button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Hover to show Popup dialog {`${show}`}
        </button>
      </div> */}
      {/* <div style={{ position: "relative" }}>
        <Dialog show={show}></Dialog>
      </div> */}

      {/* <Shipping /> */}
    </div>
  );
};

export default Home;
