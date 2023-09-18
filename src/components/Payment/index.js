import React from "react";
import { CoverContainer } from "./PaymentElements";
import PaymentCard from "./PaymentCard";
import InputForm from "./InputForm";

const PaymentSection = ({ amount }) => {
  return (
    <>
      <CoverContainer style={{ backgroundColor: "#051728" }}>
        <div
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {amount === "$150" ? (
            <PaymentCard borderColor="#55656A" type="basic" price="$150" />
          ) : amount === "$250" ? (
            <PaymentCard borderColor="#78CFEA" type="standard" price="$250" />
          ) : (
            <PaymentCard borderColor="#E8EA78" type="premium" price="$500" />
          )}
          <InputForm />
        </div>
      </CoverContainer>
    </>
  );
};

export default PaymentSection;
