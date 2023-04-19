import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import "./Shipping.css";

const Shipping = () => {
  const [shipTypes, setShipTypes] = useState([
    {
      id: 1,
      type: "Standard",
      price: "7.95",
    },
    {
      id: 2,
      type: "Express",
      price: "9.95",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <div className="shipping-box">
      {shipTypes && shipTypes.length > 0 ? (
        <div className="shipList">
          {/* <FormControl> */}
          {shipTypes.map((item, i) => {
            const { type, price, id } = item;
            return (
              <div
                key={i}
                className="shipType"
                onClick={() => setSelectedValue(id)}
              >
                <span className="rad">
                  <Radio
                    checked={selectedValue === id}
                    value={id}
                    name="radio-buttons"
                  />
                </span>
                <span className="name">{type}</span>
                <span className="price">${price}</span>
              </div>
            );
          })}
          {/* </FormControl> */}
        </div>
      ) : (
        <p>No records</p>
      )}
    </div>
  );
};

export default Shipping;
