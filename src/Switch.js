import React from 'react'
import "./Switch.css"
import "./Structure.css"


export default function Switch() {
    return (
    <label className="switch">
        <input type="checkbox" />
        <span className="slider"/>
    </label>
  )
}
