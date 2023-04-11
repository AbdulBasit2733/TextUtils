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

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleTitleCaseClick = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
  };

  const handleTextClear = () => {
    let newText = " ";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  const [text, setText] = useState("");
  // text="new text"; // Wrong way to do it
  //setText("New Text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}

            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="button btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button
          className="button btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Convert to lowerCase
        </button>
        <button
          className="button btn btn-primary mx-1"
          onClick={handleTitleCaseClick}
        >
          Convert to Title Case
        </button>
        <button
          className="button btn btn-primary mx-1"
          onClick={handleTextClear}
        >
          Clear Text
        </button>
        <button
          className="button btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          className="button btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above the textbox to preview it here"}</p>
      </div>
    </>
  );
}
