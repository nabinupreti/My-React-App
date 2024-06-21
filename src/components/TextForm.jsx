import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter your text");

  const handleUpperClick = () => {
    console.log("Uppercase Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <div className="container my-2">
        <h2>{props.heading}</h2>
        <div className="mb-3" controlId="exampleForm.ControlTextarea1">
          <textarea
            className="form-control"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words {text.length} characters <br />
          {text.split(" ").length * 0.008} Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
        <p></p>
      </div>
    </>
  );
}

export default TextForm;
