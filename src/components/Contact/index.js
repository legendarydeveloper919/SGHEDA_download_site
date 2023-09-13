import React from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  InformationContainer,
  Submit,
} from "./ContactElements";
import InputElement from "./InputElement";
import TextElement from "./TextElement";
const ContactSection = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    console.log(name);
    const email = document.getElementById("email").value;
    const message = document.getElementById("text").value;

    const response = await fetch(
      `http://${process.env.REACT_APP_SERVER_ADDRESS}:3001/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
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
    <>
      <CoverContainer>
        <CoverBg style={{}}>
          <ImageBg src="image/about.png" type="video/mp4" />
        </CoverBg>
        <CoverContent
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <CoverH1
            style={{
              textAlign: "center",
              fontSize: "48px",
              textDecoration: "underline",
            }}
          >
            CONTACT US
          </CoverH1>
          <CoverH1
            style={{
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            We reserve the right to respond to emails as time and other projects
            allow
          </CoverH1>
        </CoverContent>
      </CoverContainer>
      <InformationContainer>
        <div
          style={{
            width: "80%",
            margin: "auto",
            borderRadius: "20px",
            boxShadow: "0px 0px 22px 0px rgba(0, 0, 0, 0.16)",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <CoverH1
              style={{
                color: "#051728",
                textAlign: "center",
                fontSize: "28px",
                textDecoration: "underline",
              }}
            >
              CONTACT US
            </CoverH1>
            <img
              src="image/logo.png"
              alt="logo"
              style={{ width: "150px", height: "40px", marginLeft: "30px" }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <InputElement width="45%" id="name" label="Your Name" />
              <InputElement width="45%" id="email" label="Your Email" />
            </div>
            <TextElement width="100%" id="text" label="Your Message" />
            <div
              style={{
                padding: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Submit type="submit">Submit</Submit>
            </div>
          </form>
        </div>
      </InformationContainer>
    </>
  );
};

export default ContactSection;
