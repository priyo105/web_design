import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../css/Service.css";

function Service() {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animation for the entire component
  const fadeInSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    from: { opacity: 0, transform: "translateY(50px)" },
  });

  // Sliding animation for the "Analytic service" text
  const slideAnimation = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 4000, reset: true, reverse: true },
    loop: { reverse: true },
  });

  const handleScroll = () => {
    const element = document.querySelector(".basic_margins");
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  // Attach scroll event listener to check visibility
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check for visibility
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div className="basic_margins" style={fadeInSpring}>
      <p className="service_font_large">
        Maximize <span className="service_font_large_grey">efficiency</span>{" "}
      </p>
      <p className="service_font_large" style={{ marginTop: "-100PX" }}>
        {" "}
        with our intuitive
      </p>

      <div
        className="flex"
        style={{ marginTop: -100, justifyContent: "space-between" }}
      >
        <img
          src="./service_img_01.png"
          alt=""
          style={{ flex: 0.0 }}
          height={200}
        ></img>
        <div className="container">
          <animated.p
            className="service_font_large_animated"
            style={{ ...slideAnimation, overflow: "hidden" }}
          >
            Analytic service
          </animated.p>
        </div>
      </div>
      <div className="service-hr"></div>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <p className="ser_black_text_medium">
          Explore Traffic sources, page behaviour, conversions and more to gain
          deep insights <br /> into your audience. With us, your business
          doesn't just adapt - it evolves
        </p>
        <div className="flex" style={{ marginRight: "10%" }}>
          <p className="buttonlike_text">Request a Demo</p>
          <p className="buttonlike_text_orange">Start for Free </p>
        </div>
      </div>
    </animated.div>
  );
}

export default Service;
