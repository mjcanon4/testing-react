//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 contentEditable="true" spellCheck="false" className="why">
      My Favorite Video Games
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="picsum failed me" />
    </div>
  </div>,
  document.getElementById("root")
);
