import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import RoundedImage from "../components/RoundedImage";

function Widget_Control_Card() {
  const [isVisible, setIsVisible] = useState(false);

  const numberSpring = useSpring({
    number: isVisible ? 43 : 0,
    from: { number: 0 },
    delay: 2000,
    config: { duration: 3000 }, // Set animation duration to 10 seconds
  });

  const handleScroll = () => {
    const element = document.querySelector(".card04");
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  // Attach scroll event listener to check visibility
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <p className="white_text_small">Transactions</p>
            </div>

            <div className="flex" style={{ justifyContent: "center" }}>
              <img src="./increase.png" height={20} alt="" />
              <p className="percentage">+14%</p>
            </div>
            <animated.p
              className="white_text_large"
              style={{ textAlign: "center", marginTop: "5px" }}
            >
              {numberSpring.number.interpolate((val) => `${val.toFixed(0)}K`)}
            </animated.p>
          </div>
        </div>
      </div>
      <p className="white_text_medium">Widget Control</p>
      <p className="grey_smaller_text text_center">
        Reports Provide a comprehensive overview <br />
        of important aspects of web analytics
      </p>
    </div>
  );
}

export default Widget_Control_Card;
