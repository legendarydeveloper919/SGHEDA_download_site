import React, { useState } from "react";
import InputElement from "./InputElement";
import { CoverH1, BasicButton } from "./PaymentElements";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import CoinsList from "./CoinsList";
import "./InputElement.css";
const InputForm = () => {
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
        <InputElement width="100%" id="fullname_form" label="Full Name" />
        <InputElement width="100%" id="email" label="Email" />
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
          <BasicButton style={{ color: "#fefefe", textAlign: "center" }}>
            Confirm
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
