import { useCallback } from "react";

function UseCallbackHook() {

  const handleClick = useCallback(() => {
    console.log('Clicando!');
  }, []);

  return (
    <>
      <button onClick={handleClick}>Clica aqui pai</button>
    </>
  )
}

export default UseCallbackHook;
