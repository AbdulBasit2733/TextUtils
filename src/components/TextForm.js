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

  const handleLowClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const [text, setText] = useState("");
  // text="new text"; // Wrong way to do it
  //setText("New Text"); // Correct way to change the state
  return (
    <>
      <div className="container">
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
        <button className="button btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="button btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
