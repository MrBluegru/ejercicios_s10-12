import React from "react";
import "./scuare.css";

const Square = () => {
  let value = true;

  const unicorn = () => {
    let random = Math.floor(Math.random() * 255);
    return random;
  };

  const changeColor = () => {
    if (value === true) {
      let square = document.getElementById("square");
      square.style = `background-color: rgb(${unicorn()},${unicorn()},${unicorn()}); height: 255px; width: 255px;`;
    }
  };

  const changeColor1 = () => {
    let square = document.getElementById("square");
    square.style = "background-color: black; height: 255px; width: 255px;";
  };

  const desactivateUni = () => {
    if (value === true) {
      value = false;
    } else {
      value = true;
    }
  };

  return (
    <div className="div1">
      <div
        id="square"
        className="squareDiv"
        style={{ backgroundColor: "black", height: "255px", width: "255px" }}
        onMouseMove={() => changeColor()}
        onMouseOut={() => changeColor1()}
        onDoubleClick={() => desactivateUni()}
      ></div>
    </div>
  );
};

export default Square;

