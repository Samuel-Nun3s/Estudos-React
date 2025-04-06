import { useState } from "react";

function useContador() {
  let [valor, setValor] = useState(0);
  const incrementar = () => setValor(valor + 1);
  return { valor, incrementar };
}

function CustomHook() {
  const { valor, incrementar } = useContador();

  return (
    <div>
      <p>Valor atual: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default CustomHook;
