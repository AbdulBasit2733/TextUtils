import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };
  const handleOnChange = (event) => {
    // This is for typing in textArea without it i am not able to change the text int the field
    //console.log("Handled On Change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleTitleCaseClick = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert("Converted to Title case", "success");
  };

  const handleTextClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();

    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const [text, setText] = useState("");
  // text="new text"; // Wrong way to do it
  //setText("New Text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleUpClick}
        >
          Convert to upper case
        </button>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleLowClick}
        >
          Convert to lowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleTitleCaseClick}
        >
          Convert to Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleTextClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="button btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
