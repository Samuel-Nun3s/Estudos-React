import { useReducer } from "react";

function UseReducerHook() {

  function reducer(state, action) {
    switch (action.type) {
      case 'incrementar':
        return { contador: state.contador + 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  console.log(state);

  return (
    <>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
    </>
  )
}

export default UseReducerHook;
