import React from "react";

function RoundedImage({ src }) {
  return (
    <div
      style={{
        borderRadius: "100%",
        overflow: "hidden",
        width: "60px",
        height: "60px", // Corrected typo
      }}
    >
      <img
        src={src}
        alt="Rounded"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default RoundedImage;
