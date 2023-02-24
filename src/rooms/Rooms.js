import React from "react"
import "./Style.css"
import { Link } from "react-router-dom"

export default function Rooms() {
  return (
    <div className="rooms">
      <div className="roomBox">
        <div className="roomInfo">
          <h1>Living Room</h1>
          <h3>4 / 6 devices ON</h3>
        </div>
        <Link to="/rooms/livingRoom">
          <img
            className="room-icon"
            src="/images/icons8-living-room-100.png"
            alt="living-room"
          />
        </Link>
      </div>

      <div className="roomBox">
        <div className="roomInfo">
          <h1>Kitchen</h1>
          <h3>1 / 3 devices ON</h3>
        </div>
        <Link to="/rooms/kitchen">
          <img
            className="room-icon"
            src="/images/icons8-kitchen-room-100.png"
            alt="kitchen"
          />
        </Link>
      </div>

      <div className="roomBox">
        <div className="roomInfo">
          <h1>Fitting room</h1>
          <h3>0 / 2 devices ON</h3>
        </div>
        <Link to="/rooms/fittingRoom">
          <img
            className="room-icon"
            src="/images/icons8-fitting-room-100.png"
            alt="fitting-room"
          />
        </Link>
      </div>

      <div className="roomBox">
        <div className="roomInfo">
          <h1>Office</h1>
          <h3>4 / 4 devices ON</h3>
        </div>
        <Link to="/rooms/office">
          <img
            className="room-icon"
            src="/images/icons8-office-100.png"
            alt="office"
          />
        </Link>
      </div>
    </div>
  )
}
