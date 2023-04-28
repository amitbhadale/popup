import React, { useState } from "react";
import "./Notify.scss";

const Notify = () => {
  const [countryList, setCountryList] = useState([
    {
      id: "1",
      name: "India",
      code: "+91",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
    {
      id: "2",
      name: "USA",
      code: "+01",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
    {
      id: "3",
      name: "Africa",
      code: "+92",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
    {
      id: "4",
      name: "Austrelia",
      code: "+81",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
    {
      id: "5",
      name: "Japan",
      code: "+61",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
    {
      id: "6",
      name: "China",
      code: "+21",
      imageURL: "https://dummyimage.com/20x15/111/fff",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const openDropdown = () => {
    setIsOpen(!isOpen);
  };
  const countryselect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };
  return (
    <div className="notify-box">
      <div className="notify-input-box">
        <div className="mobile-sec">
          <div className="text-box">
            <h5>Select Country:</h5>

            <div className="inputs">
              <div className="dropdwn">
                <ul
                  className={isOpen ? "open" : ""}
                  onClick={() => openDropdown()}
                >
                  {countryList.map((item) => {
                    const { code, id, imageURL } = item;
                    return (
                      <li key={id} onClick={() => countryselect(code)}>
                        <img src={imageURL} alt="" /> <span>{code}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mobile-input">
                <input type="text" placeholder="Mobile Number" />
              </div>
            </div>
            <button className="txt-me-button">Text Me</button>
          </div>
        </div>
        <div className="email-sec">
          <div className="inputs">
            <input type="email" placeholder="Email address" />
            <button className="email-me-button">Email Me</button>
          </div>
        </div>
      </div>
      <p>Selected Country: {selectedCountry}</p>
    </div>
  );
};

export default Notify;