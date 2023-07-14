import React from "react";
import "../stylesheets/Heading.css";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  );
};

export default Heading;