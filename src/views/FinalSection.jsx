import React from "react";

function FinalSection() {
  return (
    <div style={{ textAlign: "center", marginTop: "10%" }}>
      <img src="./started.png" alt="" />
      <p
        className="service_font_large"
        style={{ textAlign: "center", marginTop: "0" }}
      >
        Get Started
      </p>

      <p
        className="percentage_grey_text"
        style={{ marginTop: -100, color: "gray" }}
      >
        Turn information into advantage! Start using <br /> Ramos today, Sign up
        for a free trail{" "}
      </p>

      <div
        className="flex"
        style={{
          marginRight: "10%",
          justifyContent: "center",
          marginLeft: 150,
          marginTop: 50,
        }}
      >
        <p className="buttonlike_text" style={{ padding: 15, marginRight: 50 }}>
          Request a Demo
        </p>
        <p className="buttonlike_text_orange">Start for Free </p>
      </div>
    </div>
  );
}

export default FinalSection;
