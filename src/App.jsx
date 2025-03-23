import './App.css';
import HelloWorld from './components/HelloWorld.jsx';
import SayMyName from './components/SayMyName.jsx';
import Pessoa from './components/Pessoa.jsx';

function App() {
  const nome = "Maria";
  return (
      <div>
        <SayMyName nome="Samuel"/>
        <SayMyName nome="Pedro"/>
        <SayMyName nome={nome}/>
        <Pessoa
          nome="Samuel"
          idade="19"
          profissao="Programador"
          foto="https://via.placeholder.com/150"
        />
      </div>
  )   
}

export default App
