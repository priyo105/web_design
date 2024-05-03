import React from "react";

const CollapsableCard = ({ text }) => {
  return (
    <div
      className="card01 flex"
      style={{
        width: "35%",
        height: "90px",
        marginLeft: "5%",
        justifyContent: "space-between",
      }}
    >
      <p className="normal_medium_text" style={{ padding: 10 }}>
        {text}
      </p>
      <RoundedText />
    </div>
  );
};

const RoundedText = () => {
  return <p className="rounded-text">+</p>;
};

export default CollapsableCard;
