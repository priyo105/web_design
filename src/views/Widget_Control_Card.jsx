import React from "react";
import RoundedImage from "../components/RoundedImage";
function Widget_Control_Card() {
  return (
    <div className="card04">
      <div className="flex justify_center">
        {" "}
        {/* Added justify_center class */}
        <div
          className="flex"
          style={{ alignItems: "center", marginTop: "10%" }}
        >
          {" "}
          {/* Removed alignContent */}
          <div className="subcard">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "15%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="./layers.png" alt="" height={30} width={30} />
              </div>
              <div
                class="flex"
                style={{ justifyContent: "center", marginTop: 30 }}
              >
                <RoundedImage src={"./person1.jpg"} />
                <RoundedImage src={"./person2.jpg"} />
              </div>
            </div>
          </div>
          <div className="subcard">
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <p class="white_text_small">Transactions</p>
            </div>

            <div className="flex" style={{ justifyContent: "center" }}>
              <img src="./increase.png" height={20} alt="" />
              <p className="percentage">+14%</p>
            </div>
            <p
              className="white_text_large"
              style={{ textAlign: "center", marginTop: "5px" }}
            >
              43K
            </p>
          </div>
        </div>
      </div>
      <p class="white_text_medium">Widget Control</p>
      <p class="grey_smaller_text text_center">
        Reports Provide a comprehensive overview <br />
        of important aspects of web analytics
      </p>
    </div>
  );
}

export default Widget_Control_Card;
