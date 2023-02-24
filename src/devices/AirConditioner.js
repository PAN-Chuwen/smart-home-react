import React from "react"
import Switch from "./Switch"
import TemperatureBlock from "./TemperatureBlock"
import "./Style.css"
import "./Switch.css"

export default function AirConditioner() {
  return (
    <div className="deviceBox">
      <div className="titleBox">
        <h1>Air Conditioner</h1>
        <Switch />
      </div>
      <div className="controlBox">
        <h2>Temperature</h2>
        <TemperatureBlock />
      </div>
    </div>
  )
}
