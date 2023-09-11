import React from "react";
import { CoverH1 } from "./ContactElements";
import "./TextElement.css";
const TextElement = (props) => {
  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        width: props.width,
        marginTop: "30px",
      }}
    >
      <CoverH1
        style={{
          fontSize: "16px",
          color: "#8C9397",
          textAlign: "start",
          marginBottom: "5px",
          width: "100%",
        }}
      >
        {props.label}
      </CoverH1>
      <textarea
        className="text-field"
        style={{ width: "100%", borderRadius: "10px", height: "20vh" }}
        id={props.id}
        type="text"
        placeholder={"Enter " + props.label}
      ></textarea>
    </div>
  );
};

export default TextElement;
