import React from "react";

const headingColor = {
  color: ""
};

var time = new Date().getHours();
var greetings;
if (time >= 0 && time < 12) {
  greetings = "Good Morning";
  headingColor.color = "red";
} else if (time >= 12 && time < 18) {
  greetings = "Good Afternoon";
  headingColor.color = "green";
} else {
  greetings = "Good Night";
  headingColor.color = "blue";
}
function heading() {
  return (
    <div>
      <h1 className="heading" style={headingColor}>
        {greetings}
      </h1>
    </div>
  );
}
export default heading;
