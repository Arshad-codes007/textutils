import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearText = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text has been cleared!", "success");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("textBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let removeSpaces = text.split(/[ ]+/);
    setText(removeSpaces.join(" "));
    props.showAlert("Extra spaces have been removed!", "success");
  };
  return (
    <>
      <div className="container my-4">
        <form>
          <div className="form-group">
            <label htmlFor="textBox">
              <h1>{props.heading}</h1>
            </label>
            <textarea
              className="form-control"
              id="textBox"
              rows="8"
              defaultValue={""}
              value={text}
              onChange={handleOnChange}
            />
          </div>
        </form>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read all.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview here"}
        </p>
      </div>
    </>
  );
}
