import React, { useState } from "react";
import {
  CoverH1,
  BasicButton,
  StandardButton,
  PremiumButton,
} from "./PaymentElements";
import "./PaymentCard.css"; // Import the CSS file where the animation styles will be defined

const PaymentCard = (props) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const style = {
    minWidth: "250px",
    width: "20%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#131F36",
    padding: "20px",
    borderRadius: "10px",
    border: `1px solid ${props.borderColor}`,
    position: "relative",
    margin: 30,
  };
  return (
    <div
      style={style}
      className={isHovered ? "scaleAnimation" : ""} // Apply the CSS class based on hover status
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CoverH1 style={{ textAlign: "center", fontSize: "25px" }}>
        {props.type === "basic"
          ? "Basic plan"
          : props.type === "standard"
          ? "Standard plan"
          : "Premium Plan"}
      </CoverH1>
      <CoverH1
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#B2ACAC",
          marginTop: "5px",
        }}
      >
        Monthly plan
      </CoverH1>
      <CoverH1
        style={{
          fontSize: "86px",
          color: " rgba(255, 255, 255, 0.08)",
          marginTop: "80px",
        }}
      >
        {props.price}
      </CoverH1>
      <div
        style={{
          position: "absolute",
          top: "20vh",
          width: "80%",
          height: "25vh",
          borderRadius: "10px",
          background: "#131F36",
          filter: "blur(14.5px)",
          flexShrink: "0",
        }}
      ></div>
      <div style={{ zIndex: 10 }}>
        <CoverH1
          style={{
            textAlign: "center",
            fontSize: "48px",
            color: "#fff",
            fontWeight: "700",
          }}
        >
          {props.price}
        </CoverH1>
        <CoverH1
          style={{
            textAlign: "center",
            fontSize: "22px",
            color: "#fff",
            marginTop: "5px",
          }}
        >
          Billed Monthly
        </CoverH1>
        {props.type === "basic" ? (
          <BasicButton>
            <CoverH1 style={{ fontSize: "18px" }}> Get Started</CoverH1>
          </BasicButton>
        ) : props.type === "standard" ? (
          <StandardButton>
            <CoverH1 style={{ fontSize: "18px" }}> Get Started</CoverH1>
          </StandardButton>
        ) : (
          <PremiumButton>
            <CoverH1 style={{ fontSize: "18px", color: "black" }}>
              {" "}
              Get Started
            </CoverH1>
          </PremiumButton>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
