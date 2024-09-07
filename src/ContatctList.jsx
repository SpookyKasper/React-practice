import { useRef } from "react";
import React from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef);
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} className="peakTime" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
