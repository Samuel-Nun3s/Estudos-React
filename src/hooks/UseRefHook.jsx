import { useRef } from "react";

function UseRefHook() {

  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>
        Focar
      </button>
    </>
  )
}

export default UseRefHook;
