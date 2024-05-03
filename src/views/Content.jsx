/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "../css/Content.css";
import Content_Card from "./Content_Card";
import Widget_Control_Card from "./Widget_Control_Card";

function Content() {
  return (
    <div>
      <div class="content_part_1">
        <div>
          <p>You key to strategic</p>
          <p class="text">success through analytics</p>
        </div>
        <div class="smaller_text">
          <p>Ready for exciting, instantaneous,</p>
          <p>all-accessible insights in real time ?</p>
        </div>
      </div>

      <div class="flex">
        <Content_Card />
        <Widget_Control_Card />
      </div>

      <div
        className="flex"
        style={{ justifyContent: "center", marginTop: "-100px" }}
      >
        <p style={{ textAlign: "center", flex: 0.25 }}>
          Up to <span class="black_text_large"> 45%</span>{" "}
        </p>

        <div style={{ marginLeft: 0, marginTop: 20 }}>
          <p className="black_text_medium" style={{ textAlign: "left" }}>
            Increase your Analytics efficiency by upto 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis{" "}
            <br /> and save time for making important, informed decision
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Content;
