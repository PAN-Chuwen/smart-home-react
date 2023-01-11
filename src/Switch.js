import React from 'react'
import "./Switch.css"


export default function Switch({ rounded = false }) {
  
    
  
    return (
    <label className="switch">
        <input type="checkbox" />
        <span className="slider"/>
    </label>

  )
}
