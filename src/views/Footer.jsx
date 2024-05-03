import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="flex" style={{ justifyContent: "space-evenly" }}>
        <div className="flex common_margin" style={{ flex: 0.9 }}>
          <p className="grey_small_text">About</p>
          <p className="grey_small_text">Why Us</p>
          <p className="grey_small_text">Platform</p>
          <p className="grey_small_text">Pricing</p>
          <p className="grey_small_text">Contacts</p>
        </div>
        <p
          className="white_text_medium common_margin"
          style={{ fontSize: 50, marginTop: "7%", fontWeight: 500 }}
        >
          hello@ramos.com
        </p>
      </div>

      <hr
        style={{
          marginLeft: "10%",
          marginRight: "5%",
          color: "gray",
          marginBottom: "3%",
          height: "1px",
          border: "none",
          borderTop: "1px solid gray",
        }}
      />

      <div className="flex">
        <div className="flex" style={{ flex: 0.4, marginLeft: "10%" }}>
          <div style={{ flex: 0.9 }}>
            <p className="white_text_small_footer">Warrensvile Heights</p>
            <p className="white_text_gray_footer">14418 Vineyard Drive,NC</p>
            <p className="white_text_gray_footer">44128</p>
          </div>
        </div>

        <div className="flex" style={{ flex: 0.5, marginLeft: "10%" }}>
          <div style={{ flex: 0.9 }}>
            <p className="white_text_small_footer">Saint Louis</p>
            <p className="white_text_gray_footer">1366 Penn Street</p>
            <p className="white_text_gray_footer">63101</p>
          </div>
        </div>

        <div>
          <p className="white_text_medium">Linkedin</p>
          <p className="white_text_medium">Instagram</p>
          <p className="white_text_medium">Facebook</p>
        </div>
      </div>

      <div className="flex common_margin" style={{ marginLeft: "10%" }}>
        <p
          className="white_text_large"
          style={{ fontSize: 200, marginTop: "-8%", flex: 0.5 }}
        >
          Ramos
        </p>
        <p
          className="white_text_gray_footer"
          style={{ fontSize: 20, marginTop: "-2%", flex: 0.2 }}
        >
          Privacy Policy
        </p>

        <p
          className="white_text_gray_footer"
          style={{ fontSize: 20, marginTop: "-2%", flex: 0.2 }}
        >
          License Agreement
        </p>

        <img
          src="./qr.png"
          height={200}
          width={200}
          alt=""
          style={{ marginTop: "-2%" }}
        />
      </div>
    </div>
  );
}

export default Footer;
