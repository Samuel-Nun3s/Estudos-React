import './App.css';
import TemaContexto from './hooks/CreateContextHook';
import CustomHook from './hooks/CustomHook';
import UseCallbackHook from './hooks/UseCallbackHook';
import UseContextHook from './hooks/UseContextHook';
import UseEffectHook from './hooks/UseEffectHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseReducerHook from './hooks/UseReducerHook';
import UseRefHook from './hooks/UseRefHook';
import UseStateHook from './hooks/UseStateHook';

function App() {

  return (
    <div className='App'>
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />
      <TemaContexto.Provider value='dark'>
        <UseContextHook />
      </TemaContexto.Provider>
      <CustomHook />
    </div>
  )   
}

export default App;
