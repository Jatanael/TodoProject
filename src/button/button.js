import React from "react";
import { FaPlus } from "react-icons/fa";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button">
      <button className="button-icon" type="submit">
        <FaPlus className="icon" color="white" />
      </button>{" "}
    </div>
  );
};

export default Button;
