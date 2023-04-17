import React from "react";
import "./Dialog.css";

const Dialog = ({ show }) => {
  return (
    <>
      <div
        id="hovr-dialog"
        className="nosto_element nosto-dynamic-placement"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="nosto-container">
          <div className="nosto-title">&nbsp;</div>
          <div className="list-container">
            <span>
              Confirm this item fits your vehicle by clicking FITS THESE
              VEHICLES before purchasing.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
