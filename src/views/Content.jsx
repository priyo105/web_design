import React, { useEffect, useState } from "react";
import "../css/Content.css";
import Content_Card from "./Content_Card";
import Widget_Control_Card from "./Widget_Control_Card";
import { useInView } from "react-intersection-observer";

function Content() {
  const [isVisible, setIsVisible] = useState(false);
  const [contentRef, inView] = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <div ref={contentRef} className={`content ${isVisible ? "appear" : ""}`}>
      <div className="content_part_1">
        <div>
          <p>You key to strategic</p>
          <p className="text">success through analytics</p>
        </div>
        <div className="smaller_text">
          <p>Ready for exciting, instantaneous,</p>
          <p>all-accessible insights in real time ?</p>
        </div>
      </div>

      <div className="flex">
        <Content_Card />
        <Widget_Control_Card />
      </div>

      <div
        className="flex"
        style={{ justifyContent: "center", marginTop: "-100px" }}
      >
        <p style={{ textAlign: "center", flex: 0.25 }}>
          Up to <span className="black_text_large"> 45%</span>{" "}
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
