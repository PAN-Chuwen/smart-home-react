import React from 'react'
import Fan from './Fan'
import Lights from './Lights'
import Cleaner from './Cleaner'
import AirConditioner from './AirConditioner'

export default function Devices() {
  return (
    <div>
        <Fan></Fan>
        <Lights></Lights>
        <Cleaner></Cleaner>
        <AirConditioner></AirConditioner>

    </div>
  )
}