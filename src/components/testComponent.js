import React, { useState } from "react";
import Tooltip from "./tooltip";
import "./tooltip.css";

export function Test() {
  const [tooltipText, setTooltipText] = useState("");
  return (
    <div className="container">
      <div
        className="box-1"
        onMouseEnter={() => setTooltipText("hovering on box 1")}
        onMouseLeave={() => setTooltipText("")}
      >
        box-1
      </div>
      <div
        className="box-2"
        onMouseEnter={() => setTooltipText("on box 2")}
        onMouseLeave={() => setTooltipText("")}
      >
        box-2
      </div>
      <Tooltip text={tooltipText} />
    </div>
  );
}
