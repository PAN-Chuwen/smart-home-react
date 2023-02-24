import React from "react"
import "./Structure.css"

export default function Rooms() {
  return (
    <div className="rooms">
      <div className="roomBox">
        <h2 className="titleBox">Living Room</h2>
        <h3>4 devices</h3>
        <img src="/images/icons8-living-room-100.png" alt="living-room" />
      </div>

      <div className="roomBox">
        <h2>kitchen</h2>
        <h3>3 devices</h3>
        <img src="/images/icons8-kitchen-room-100.png" alt="kitchen" />
      </div>

      <div className="roomBox">
        <h2>fitting Room</h2>
        <h3>4 devices</h3>
        <img src="/images/icons8-fitting-room-100.png" alt="fitting-room" />
      </div>

      <div className="office">
        <h2>office</h2>
        <h3>4 devices</h3>
        <img src="/images/icons8-office-100.png" alt="office" />
      </div>
    </div>
  )
}
