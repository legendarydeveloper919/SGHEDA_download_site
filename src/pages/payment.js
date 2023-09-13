import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentSection from "../components/Payment";
const Payment = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <PaymentSection amount={params.amount} />
      <Footer />
    </>
  );
};

export default Payment;
