import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Progress from "react-progressbar";

import LineChart from "../components/LineChart";

function Content_Card() {
  const [isVisible, setIsVisible] = useState(false);

  const numberSpring = useSpring({
    number: isVisible ? 56 : 0,
    from: { number: 0 },
    delay: 2000,
    config: { duration: 3000 },
  });

  const handleScroll = () => {
    const element = document.querySelector(".visitor_content");
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="card01">
      <div className="flex common_margin">
        <div className="left_card_content">
          <button className="btn">Setting up reports</button>

          <p className="desc_font_01">Fast and easy access</p>
          <p className="desc_font_02">to analytics</p>
          <p className="grey_small_text">
            One Platform is a comprehensive <br /> system of solutions that will
            be the <br /> first step towards digitalization of <br /> your
            business
          </p>
        </div>
        <div className="card02">
          <p className="normal_text common_margin">Sales Statistic</p>
          <div className="flex profit">
            <img src="./profit_icon.png" alt="" />
            <div style={{ flex: 0.5 }}>
              <p className="grey_smaller_text">Total Profit</p>
              <p className="normal_medium_text">$ 264,2K</p>
            </div>
            <div className="visitor_content" style={{ flex: 0.5 }}>
              <p className="visitor_text">Visitor</p>
              <div>
                <Progress completed={40} height={5} color="lightgreen" />
              </div>

              <div className="flex">
                <animated.p className="normal_medium_text">
                  {numberSpring.number.interpolate(
                    (val) => `${val.toFixed(0)}K`
                  )}
                </animated.p>
                <div style={{ marginTop: "5px" }}>
                  <img src="./increase.png" alt="" height={15} />
                </div>

                <p className="percentage">+14%</p>
              </div>
            </div>
          </div>
          <div className="flex" style={{ width: 400, height: 200 }}>
            <div className="flex">
              <LineChart />

              <div className="card03">
                <div style={{ marginLeft: 10 }}>
                  <div className="flex">
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
