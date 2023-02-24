import Switch from "./Switch"
import React from "react"
import IntensityBlock from "./IntensityBlock"
import "./Style.css"

export default function Cleaner() {
  return (
    <div className="deviceBox">
      <div className="titleBox">
        <h1>Cleaner</h1>
        <Switch />
      </div>
      <div className="controlBox">
        <h2>Intensity</h2>
        <IntensityBlock />
      </div>
    </div>
  )
}
