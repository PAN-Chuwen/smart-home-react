import React from "react";
import { useState } from "react";
import "./Structure.css"
import "./TemperatureBlock.css"

export default function TemperatureBlock() {
  const [temperature, setTemperature] = useState(20);
  function handleArithOp(operator) {
    if (operator === "-") setTemperature(temperature - 1);
    else if (operator === "+") setTemperature(temperature + 1);
  }
  return (
    <div className="temperatureBox">
      <ArithmeticButton
        operator="-"
        onArithBtnClick={() => handleArithOp("-")}
      />
      <div className="temperatureNumBox">{temperature}°C</div>
      <ArithmeticButton
        operator="+"
        onArithBtnClick={() => handleArithOp("+")}
      />
    </div>
  );
}

function ArithmeticButton({ operator, onArithBtnClick }) {
  return <button onClick={onArithBtnClick}>{operator}</button>;
}
