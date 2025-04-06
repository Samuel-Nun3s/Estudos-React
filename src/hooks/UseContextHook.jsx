import { useContext } from "react";
import TemaContexto from "./CreateContextHook";

function UseContextHook() {
  
  const tema = useContext(TemaContexto);

  return (
    <p>O tema atual é: {tema}</p>
  )
}

export default UseContextHook;
