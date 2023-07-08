import React, { useEffect, useState } from "react";
import "./tooltip.css";

export default function Tooltip(props) {
  const { text } = props;
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoords([x, y]);
    });
  }, []);

  return (
    <div
      className="tooltip"
      style={{
        display: text.length > 0 ? "" : "none",
        position: "fixed",
        left: coords[0] + 15 + "px",
        top: coords[1] + 25 + "px"
      }}
    >
      {text}
    </div>
  );
}
