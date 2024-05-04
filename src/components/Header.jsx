import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="firstLine">
        <div className="img_holder">
          <img src="./header_asset_001.png" className="header_asset_01" alt="" />
        </div>
        <div>
          <p className="headerFont">Analytics</p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="secondLine">
          <p className="headerFont">
            that <span className="greytext">helps</span> you
          </p>
        </div>
        <img
          src="./desktop_img.png"
          alt=""
          style={{ marginTop: "-13%",  height: "300px" }}
        />
      </div>

      <div className="thirdLine">
        <p className="headerFont">shape</p>
        <img
          src="./header_asset_02.png"
          style={{ height: 100, marginTop: 100 }}
          alt=""
        />
        <p className="headerFont">the future</p>
      </div>
    </div>
  );
}

export default Header;
