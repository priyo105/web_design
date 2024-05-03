import React from "react";
import "../css/Analytics.css";
import CollapsableCard from "../components/CollapsableCard";

function Analytics() {
  return (
    <div className="common_margin">
      <div>
        <p className="semi_large_text common_margin">
          Turning Data into real <br /> actions and ideas.
        </p>
      </div>

      <div className="flex">
        <div style={{ flex: 1 }}>
          <div>
            <CollapsableCard text={"Instant insights"} />
            <div style={{ marginTop: "-7%" }}>
              <CollapsableCard text={"AI Technology"} />
            </div>
            <div style={{ marginTop: "-7%" }}>
              <CollapsableCard text={"Easy Integration"} />
            </div>
          </div>
        </div>

        <div style={{ position: "relative", width: "40%" }}>
          <img
            src="./desktop.png"
            alt=""
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              top: -140,
              left: 100,
              zIndex: -1,
            }}
          />
          <img
            src="./mobile.png"
            alt=""
            style={{ width: "40%", position: "relative", zIndex: 1 }}
          />
        </div>
      </div>
      <p className="servcie_huge_text">RAMOS</p>

      <p
        className="service_font_large common_margin"
        style={{ marginTop: "-10%" }}
      >
        We give you full <br /> <span className="greytext">control</span> over
        your data
      </p>
    </div>
  );
}

export default Analytics;
