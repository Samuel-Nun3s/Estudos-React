import { useState } from "react";

function UseStateHook() {

  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique
      </button>
    </div>
  )
}

export default UseStateHook;
