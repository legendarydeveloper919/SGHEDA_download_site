import React from "react";
import { CoverH1 } from "./PaymentElements";
import "./InputElement.css";
const InputElement = (props) => {
  return (
    <div
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        width: props.width,
        marginBottom: "10px",
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
      <input
        className="input-field_info"
        style={{ width: "100%" }}
        id={props.id}
        placeholder={"Enter " + props.label}
      ></input>
    </div>
  );
};

export default InputElement;
