import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../css/Analytics.css";
import CollapsableCard from "../components/CollapsableCard";

function Analytics() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: config.molasses,
  });

  const ramosSpring = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: inView ? "translateX(0)" : "translateX(-100%)" },
    config: { duration: 3000 },
  });

  useEffect(() => {
    if (inView) {
    }
  }, [inView]);

  return (
    <div className="common_margin" ref={ref}>
      <animated.div style={fadeIn}>
        <p className="semi_large_text common_margin">
          Turning Data into real <br /> actions and ideas.
        </p>
      </animated.div>

      <div className="flex">
        <div style={{ flex: 1 }}>
          <animated.div style={fadeIn}>
            <CollapsableCard text={"Instant insights"} />
            <div style={{ marginTop: "-7%" }}>
              <CollapsableCard text={"AI Technology"} />
            </div>
            <div style={{ marginTop: "-7%" }}>
              <CollapsableCard text={"Easy Integration"} />
            </div>
          </animated.div>
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
      <animated.p className="servcie_huge_text" style={ramosSpring}>
        RAMOS
      </animated.p>

      <animated.p
        className="service_font_large common_margin"
        style={{ marginTop: "-10%", ...fadeIn }}
      >
        We give you full <br /> <span className="greytext">control</span> over
        your data
      </animated.p>
    </div>
  );
}

export default Analytics;
