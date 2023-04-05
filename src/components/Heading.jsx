import React from "react";

function Heading() {
  const timeOfDay = new Date().getHours();
  let greeting = "";
  let colorStyle = {
    color: ""
  };

  if (timeOfDay >= 0 && timeOfDay < 12) {
    greeting = "Good Morning";
    colorStyle.color = "yellow";
  } else if (timeOfDay >= 12 && timeOfDay < 18) {
    greeting = "Good Afternoon";
    colorStyle.color = "green";
  } else if (timeOfDay >= 18 && timeOfDay < 24) {
    greeting = "Good Evening";
    colorStyle.color = "darkblue";
  }
  return (
    <h1 className="heading" style={colorStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
