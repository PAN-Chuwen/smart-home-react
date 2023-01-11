import React from "react";
import { useState } from "react";

export default function TemperatureBlock() {
  const [temperature, setTemperature] = useState(20);
  function handleArithOp(operator) {
    if (operator === "-") setTemperature(temperature - 1);
    else if (operator === "+") setTemperature(temperature + 1);
  }
  return (
    <div>
      Temperature
      <ArithmeticButton
        operator="-"
        onArithBtnClick={() => handleArithOp("-")}
      />
      <div className="temperatureNumBlock">{temperature}°C</div>
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
