import React from 'react'
import Fan from './Fan'
import Lights from './Lights'
import Cleaner from './Cleaner'
import AirConditioner from './AirConditioner'
import TemperatureBlock from './TemperatureBlock'
import './Structure.css'

export default function Devices() {
  return (
    <div className='devices'>
        <Fan></Fan>
        <Lights></Lights>
        <Cleaner></Cleaner>
        <AirConditioner></AirConditioner>


    </div>
  )
}
