import React from "react";

function Footer() {
  const name = "Beibu";
  const currentYear = new Date().getFullYear();
  const customStyle = {
    color: "lightblue",
    fontSize: "20px",
    border: "5px solid lighblue"
  };
  return (
    <div>
      <p style={customStyle}>Ya-Ta!</p>
      <h1>Created by {name}</h1>
      <p style={{ color: "purple" }}>Copyright {currentYear}</p>
    </div>
  );
}

export default Footer;
