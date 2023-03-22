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
    props.showAlert("Copied to Clipboard", "success");
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
  const [btnColor, setBtnColor] = useState("warning");

  const toggleStyle = () => {
    if (myStyle.color === "#212529") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      setBtnText("Enable Light Mood");
      setConterText({ color: "#ffc107" });
      setBtnColor("success");
    } else {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mood");
      setConterText({ color: "#212529" });
      setBtnColor("warning");
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
          rows="6"
          style={myStyle}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={handelUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-warning " onClick={handeLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={handeClear}>
        Clear Data
      </button>
      <button disabled={text.length===0} className="btn btn-warning" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button className={`btn btn-${btnColor} mx-2`} onClick={toggleStyle}>
        {btntext}
      </button>
      <h2 className="my-3">Your Text Summary</h2>
      <p>
        <b>
          <span style={{ fontSize: 40 }}>
            {text.split(" ").filter(Boolean).length}
          </span>
        </b>{" "}
        <span style={conterText}>Word </span>{" "}
        <b>
          <span style={{ fontSize: 40 }}>{text.length}</span>
        </b>{" "}
        <span style={conterText}>Characters</span>
      </p>
      <p>
        <b>
          <span style={{ fontSize: 35 }}>
            {0.008 * text.split(" ").filter(Boolean).length}
          </span>
        </b>{" "}
        <span style={conterText}>Minutes Read</span>
      </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter somting to preview it here"}</p>
    </div>
  );
}
