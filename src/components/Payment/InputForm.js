import React, { useState } from "react";
import InputElement from "./InputElement";
import { CoverH1, BasicButton } from "./PaymentElements";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import CoinsList from "./CoinsList";
import "./InputElement.css";
const InputForm = (props) => {
  const [toggle, setToggle] = useState(false);
  const [toggleCoin, setToggleCoin] = useState(false);
  function toggleCoinFunc() {
    if (toggle) {
      setToggle(!toggle);
    }
    setToggleCoin(!toggleCoin);
  }
  const [country, setCountry] = useState("");
  const [region, setReigon] = useState("");
  const handleConfirm = async () => {
    const name = document.getElementById("billing_fullname").value;
    console.log(name);
    const email = document.getElementById("billing_email").value;
    const machine_number = document.getElementById("machine_number").value;
    const price = props.price;

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_ADDRESS}/api/pay`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          machine_number,
          price,
          country,
          region,
        }),
      }
    );

    if (response.ok) {
      console.log("Email sent successfully");
      // Show success message or perform any other desired action
    } else {
      console.error("Error sending email");
      // Show error message or perform any other desired action
    }
  };
  return (
    <div
      style={{
        width: "60%",
      }}
    >
      <div
        style={{
          padding: "25px",
          backgroundColor: "#242F55",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <CoverH1 style={{ fontSize: "28px" }}>Billing Details</CoverH1>
      </div>
      <div
        style={{
          backgroundColor: "#1B233F",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "20px",
        }}
      >
        <InputElement width="100%" id="billing_fullname" label="Full Name" />
        <InputElement width="100%" id="billing_email" label="Email" />
        <InputElement width="100%" id="machine_number" label="Machine Number" />
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
            className="input-field_info"
            style={{ width: "50%" }}
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => setReigon(val)}
            style={{ width: "40%" }}
            className="input-field_info"
          />
        </div>

        <CoinsList toggleCoin={toggleCoin} toggleCoinFunc={toggleCoinFunc} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BasicButton
            style={{ color: "#fefefe", textAlign: "center" }}
            onClick={handleConfirm}
          >
            Confirm
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
