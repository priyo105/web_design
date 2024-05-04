import React from "react";
import "../css/Performance.css";
import RoundedImage from "../components/RoundedImage";
import SimpleBarChart from "../components/BarChart";
function  Performance() {
  return (
    <div style={{ marginLeft: "2%" }}>
      <div className="flex" style={{ marginRight: "4%" }}>
        <div className="card" style={{ marginRight: 20 }}>
          <div className="flex">
            <div className="padded_margins card-1" style={{ flex: 0.5 }}>
              <p className="percentage_title_text">Conversion rate</p>
              <img
                src="./statistics.png"
                height={30}
                alt=""
                style={{
                  marginBottom: "-80px",
                  position: "relative",
                  marginLeft: "20px",
                  zIndex: 10,
                }}
              />
              <div
                className="card05"
                style={{ marginLeft: "7%", marginTop: "-2%" }}
              >
                <p className="percentage_text">2,3 %</p>
              </div>

              <p
                className="percentage_grey_text"
                style={{ marginLeft: "50px" }}
              >
                Percentage of <br /> website visitors
              </p>
            </div>

            <div className="card-2" style={{ marginLeft: "-10%" }}>
              <p className="grey_small_text">Sales Revenue</p>
              <p className="revenue_text">$131,2 K</p>
              <div className="flex">
                <div className="simplebar" />
                <div className="simplebar" style={{ backgroundColor: "#ffd027" }} />
                <div className="simplebar" />
              </div>

              <div className="flex common_margin">
                <RoundedImage src={"./person1.jpg"} />

                <p
                  className="grey_smaller_text"
                  style={{ marginTop: "5px", color: "gray" }}
                >
                  Min. Price
                </p>

                <p
                  className="normal_small_text"
                  style={{
                    marginTop: "5px",
                    marginLeft: "20%",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  1200 $
                </p>
              </div>

              <div className="flex common_margin">
                <RoundedImage src={"./person2.jpg"} />

                <p
                  className="grey_smaller_text"
                  style={{ marginTop: "5px", color: "gray" }}
                >
                  Max. Price
                </p>

                <p
                  className="normal_small_text"
                  style={{
                    marginTop: "5px",
                    marginLeft: "20%",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  2320 $
                </p>
              </div>
              <div
                className="flex grey_smaller_text"
                style={{
                  marginTop: 40,
                  marginLeft: 10,
                  color: "gray",
                }}
              >
                <p>Engangement Rate</p>
                <p style={{ marginLeft: "20%" }}>48.4%</p>
              </div>
            </div>
          </div>
          <p
            className="justify_center normal_medium_text"
            style={{ fontSize: 24 }}
          >
            Improved Customer Service
          </p>

          <p
            className="justify_center normal_small_text"
            style={{ textAlign: "center", fontSize: 18 }}
          >
            Analytics helps optimize service processes by <br /> providing
            information on how to imrpove interactions <br /> with customers and
            increase their satisfaction
          </p>
        </div>

        <div className="card">
          <div className="flex card-3" style={{ marginTop: "20px" }}>
            <img
              src="./link.png"
              height={20}
              alt=""
              style={{
                marginTop: "5%",
                marginLeft: "5%",
                marginRight: "-14px",
              }}
            />
            <p className="normal_medium_text" style={{ fontSize: 13 }}>
              Finance Report
            </p>
          </div>
          <div className="card-4" style={{ marginTop: -40, marginLeft: "6%" }}>
            <div className="flex">
              <img
                src="./statistics.png"
                height={20}
                alt=""
                style={{
                  marginTop: "5%",
                  marginLeft: "5%",
                  marginRight: "-14px",
                }}
              />
              <p className="normal_medium_text" style={{ fontSize: 13 }}>
                Insights
              </p>
            </div>

            <div className="flex">
              <div style={{ marginLeft: "0%", flex: 0.6 }}>
                <p className="grey_smaller_text">Total Profit</p>
                <p
                  className="normal_small_text"
                  style={{ fontSize: 25, marginLeft: 25, marginTop: -3 }}
                >
                  $ 264,2k
                </p>

                <button className="btn" style={{ marginTop: -10, marginLeft: 20 }}>
                  Data Visualization
                </button>
              </div>

              <div style={{ marginTop: -80 }}>
                <SimpleBarChart />
              </div>
            </div>
          </div>{" "}
          <p
            className="justify_center normal_medium_text"
            style={{ fontSize: 24 }}
          >
            Monitoring key indicators
          </p>
          <p
            className="justify_center normal_small_text"
            style={{ textAlign: "center", fontSize: 18 }}
          >
            Analytics performs allow business to track
            <br /> KPIs, an important tool for measuring success <br />
            and achieving goals
          </p>
        </div>
      </div>
    </div>
  );
}

export default Performance;
