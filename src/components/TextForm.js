import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // This is for typing in textArea without it i am not able to change the text int the field
    //console.log("Handled On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text="new text"; // Wrong way to do it
  //setText("New Text"); // Correct way to change the state
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="button btn btn-primary" onClick={handleUpClick}>
          Convert to upper case
        </div>
      </div>
    </>
  );
}
