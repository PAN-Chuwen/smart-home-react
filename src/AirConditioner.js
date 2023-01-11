import React from "react";
import TemperatureBlock from "./TemperatureBlock";
import "./Structure.css"

export default function AirConditioner() {
  return (
    <div className="deviceBox">
      AirConditioner
      <TemperatureBlock></TemperatureBlock>
    </div>
  );
}
