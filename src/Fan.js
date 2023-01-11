import Switch from "./Switch";
import React from "react";
import IntensityBlock from "./IntensityBlock";
import './Structure.css'


export default function Fan() {
  return (
    <div className="deviceBox">
      Fan
      <Switch />
      <IntensityBlock />
    </div>
  );
}
