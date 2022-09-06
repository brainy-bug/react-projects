import React, { useState, useEffect } from "react";
import { IoIosCopy } from "react-icons/io";

import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  const handleHover = () => {
    setIsHover(true);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
      setIsHover(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColor ? `#${hexColor}` : hex);
      }}
      onMouseMove={handleHover}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <button
        className={`copy-btn ${alert ? "copied" : null} ${
          isHover ? "show" : null
        }`}
      >
        <IoIosCopy />
        {alert ? "COPIED" : "COPY"}
      </button>
      <p className="color-value">{hexColor ? `#${hexColor}` : hex}</p>
    </article>
  );
};

export default SingleColor;
