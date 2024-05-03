import React from "react";
import "../css/Service.css";
function Service() {
  return (
    <div className="basic_margins">
      <p className="service_font_large">
        Maximize <span className="service_font_large_grey">efficiency</span>{" "}
      </p>
      <p className="service_font_large" style={{ marginTop: "-100PX" }}>
        {" "}
        with our intuitive
      </p>

      <div
        className="flex"
        style={{ marginTop: -100, justifyContent: "space-between" }}
      >
        <img
          src="./service_img_01.png"
          alt=""
          style={{ flex: 0.0 }}
          height={200}
        ></img>
        <div className="container">
          <p className="service_font_large_animated">Analytic service</p>
        </div>
      </div>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <p className="ser_black_text_medium">
          Explore Traffic sources, page behaviour, conversions and more to gain
          deep insights <br /> into your audience . With us, your business
          doesnt just doesnt adapt - it evolves
        </p>
        <div className="flex" style={{ marginRight: "10%" }}>
          <p className="buttonlike_text">Request a Demo</p>
          <p className="buttonlike_text_orange">Start for Free </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
