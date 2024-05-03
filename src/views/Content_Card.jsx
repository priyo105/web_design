import React from "react";
import Progress from "react-progressbar";

import LineChart from "../components/LineChart";

function Content_Card() {
  return (
    <div class="card01">
      <div className="flex common_margin">
        <div className="left_card_content">
          <button class="btn">Setting up reports</button>

          <p class="desc_font_01">Fast and easy access</p>
          <p class="desc_font_02">to analytics</p>
          <p class="grey_small_text">
            One Platform is a comprehensive <br /> system of solutions that will
            be the <br /> first step towards digitalization of <br /> your
            business
          </p>
        </div>
        <div class="card02">
          <p class="normal_text common_margin">Sales Statistic</p>
          <div className="flex profit">
            <img src="./profit_icon.png" alt="" />
            <div style={{ flex: 0.5 }}>
              <p className="grey_smaller_text">Total Profit</p>
              <p className="normal_medium_text">$ 264,2K</p>
            </div>
            <div class="visitor_content" style={{ flex: 0.5 }}>
              <p class="visitor_text">Visitor</p>
              <div>
                <Progress completed={40} height={5} color="lightgreen" />
              </div>

              <div class="flex">
                <p class="normal_medium_text">56K</p>
                <div style={{ marginTop: "5px" }}>
                  <img src="./increase.png" alt="" height={15} />
                </div>

                <p className="percentage">+14%</p>
              </div>
            </div>
          </div>
          <div class="flex" style={{ width: 400, height: 200 }}>
            <div className="flex">
              <LineChart />

              <div className="card03">
                <div style={{ marginLeft: 10 }}>
                  <div class="flex">
                    <p style={{ fontSize: 12 }}>Rate</p>
                    <img
                      src="./hexagon.png"
                      alt=""
                      height={15}
                      color="white"
                      style={{ marginLeft: 50, marginTop: 10 }}
                    />
                  </div>
                  <p style={{ fontSize: 17, marginTop: -5 }}>+ 58%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content_Card;
