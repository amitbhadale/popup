import React, { useEffect, useState, useRef } from "react";
import "./Notify.scss";

const Notify = () => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const countryselect = (country, index) => {
    setSelectedCountry(country);
    setSelectedIndex(index);
    setIsOpen(false);
  };
  useEffect(() => {
    setSelectedCountry(countryList[0].code);
  }, [countryList]);

  return (
    <div className="notify-box">
      <div className="notify-input-box">
        <div className="mobile-sec">
          <div className="text-box">
            <h5>Select Country:</h5>

            <div className="inputs">
              <div className="dropdwn" ref={wrapperRef}>
                <ul
                  className={isOpen ? "open" : ""}
                  onClick={() => openDropdown()}
                >
                  {selectedCountry ? (
                    <li
                      onClick={() =>
                        countryselect(
                          countryList[selectedIndex].code,
                          selectedIndex
                        )
                      }
                    >
                      <img src={countryList[selectedIndex].imageURL} alt="" />{" "}
                      <span>{countryList[selectedIndex].code}</span>
                    </li>
                  ) : null}

                  {countryList.map((item, i) => {
                    const { code, id, imageURL, name } = item;
                    return selectedIndex !== i ? (
                      <li
                        order={i}
                        key={id}
                        onClick={(e) => countryselect(code, i)}
                      >
                        <img src={imageURL} alt="" /> <span>{name}</span>{" "}
                        <span>{code}</span>
                      </li>
                    ) : null;
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
