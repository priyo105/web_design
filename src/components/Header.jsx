import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div class="header">
      <div class="firstLine">
        <div class="img_holder">
          <img src="./header_asset_01.png" class="header_asset_01" alt="" />
        </div>
        <div>
          <p class="headerFont">Analytics</p>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div class="secondLine">
          <p className="headerFont">
            that <span class="greytext">helps</span> you
          </p>
        </div>
        <img
          src="./desktop_img.png"
          alt=""
          style={{ marginTop: "-12%", marginLeft: "2%", height: "300px" }}
        />
      </div>

      <div class="thirdLine">
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
