import Switch from "./Switch"
import React from "react"
import "./Style.css"

export default function Lights() {
  return (
    <div className="deviceBox">
      <div className="titleBox">
        <h1>Lights</h1>
        <Switch />
      </div>
      <div className="controlBlock">
        <div className="titleBox">
          <h2>Lamp</h2>
          <Switch />
        </div>
        <div className="titleBox">
          <h2>Spot Light</h2>
          <Switch />
        </div>
      </div>
    </div>
  )
}
