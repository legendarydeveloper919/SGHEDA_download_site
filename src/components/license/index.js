import React from "react";
import { CoverContainer, CoverContent, CoverH1 } from "./LicenseElements";
import PaymentCard from "./PaymentCard";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const LicenseSection = () => {
  return (
    <>
      <PayPalScriptProvider options={{ "client-id": "CLIENT_ID" }}>
        <CoverContainer style={{ backgroundColor: "#051728" }}>
          <CoverContent
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CoverH1 style={{ textAlign: "center", fontSize: "40px" }}>
              Flexible Plans
            </CoverH1>
            <CoverH1
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: "#B2ACAC",
              }}
            >
              Choose a plan that works best for you
            </CoverH1>
          </CoverContent>
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PaymentCard borderColor="#55656A" type="basic" price="$150" />
            <PaymentCard borderColor="#78CFEA" type="standard" price="$250" />
            <PaymentCard borderColor="#E8EA78" type="premium" price="$500" />
          </div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            // createOrder={createOrder}
            // onApprove={onApprove}
          />
        </CoverContainer>
      </PayPalScriptProvider>
    </>
  );
};

export default LicenseSection;
