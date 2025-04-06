import { useEffect } from "react";

function UseEffectHook({ click }) {
  return (
    useEffect(() => {
      console.log('Componente montado!');
    }, [click])
  )
}

export default UseEffectHook;
