import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handeLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handeClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("Enter Text Here");

  const [myStyle, setMyStyle] = useState({
    color: "#212529",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mood");

  const toggleStyle = () => {
    if (myStyle.color === "#212529") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      setBtnText("Enable Light Mood");
      setConterText({ color: "#ffc107" });
    } else {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mood");
      setConterText({ color: "#212529" });
    }
  };

  const [conterText, setConterText] = useState({
    color: "black",
  });

  return (
    <div style={myStyle} className="p-5 rounded">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="7"
          style={myStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handeLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary" onClick={handeClear}>
        Clear Data
      </button>
      <button className="btn btn-primary mx-2" onClick={toggleStyle}>
        {btntext}
      </button>
      <button className="btn btn-primary" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <h2 className="my-3">Your Text Summary</h2>
      <p>
        <b>
          <span style={{ fontSize: 40 }}>{text.split(" ").filter(Boolean).length}</span>
        </b>{" "}
        <span style={conterText}>Word </span>{" "}
        <b>
          <span style={{ fontSize: 40 }}>{text.length}</span>
        </b>{" "}
        <span style={conterText}>Characters</span>
      </p>
      <p>
        <b>
          <span style={{ fontSize: 35 }}>{0.008 * text.split(" ").filter(Boolean).length}</span>
        </b>{" "}
        <span style={conterText}>Minutes Read</span>
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somting to preview it here"}</p>
    </div>
  );
}
