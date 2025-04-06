import { useMemo } from "react";

function UseMemoHook() {

  let numero = 10;

  const resultado = useMemo(() => {
    return numero * 2;
  }, [numero]);

  return (
    <p>{resultado}</p>
  )
}

export default UseMemoHook;
