import React from "react";
import { useState } from "react";
import "./IntensityBlock.css";

export default function IntensityBlock() {
  const [chosenStates, setChosenStates] = useState([false, true, false]);
  const buttonContentArr = ["Low", "Medium", "High"];
  function handleClick(curButtonID) {
    if (chosenStates[curButtonID] === false) {
      const nextChosenStates = chosenStates.slice();
      for (let i = 0; i < chosenStates.length; i++) {
        if (i === curButtonID) {
          nextChosenStates[i] = true; // flip chosenState of current clicked button (set to true)
        } else {
          nextChosenStates[i] = false; // set rest of the buttons' states to false
        }
      }
      setChosenStates(nextChosenStates);
    }
  }
  return (
    <>
      <IntensityButton
        isChosen={chosenStates[0]}
        onChosenClick={() => handleClick(0)}
        Content={buttonContentArr[0]}
      ></IntensityButton>
      <IntensityButton
        isChosen={chosenStates[1]}
        onChosenClick={() => handleClick(1)}
        Content={buttonContentArr[1]}
      >
      </IntensityButton>
      <IntensityButton
        isChosen={chosenStates[2]}
        onChosenClick={() => handleClick(2)}
        Content={buttonContentArr[2]}
      >
      </IntensityButton>
    </>
  );
}

function IntensityButton({ Content, isChosen, onChosenClick }) {
  return (
    <button
      className="intensityButton"
      onClick={onChosenClick}
      style={{
        color: isChosen ? "cornflowerblue" : "black",
      }}
    >
        {Content}
    </button>
  );
}
