import './App.css';
import HelloWorld from './components/HelloWorld.jsx';
import SayMyName from './components/SayMyName.jsx';
import Pessoa from './components/Pessoa.jsx';
import Frase from './components/Frase.jsx';
import List from './components/List.jsx';

function App() {
  const nome = "Maria";
  return (
      <div>
        <h1>Testando CSS</h1>
        <Frase/>
        <Frase/>
        <SayMyName nome="Samuel"/>
        <SayMyName nome="Pedro"/>
        <SayMyName nome={nome}/>
        <Pessoa
          nome="Samuel"
          idade="19"
          profissao="Programador"
          foto="https://via.placeholder.com/150"
        />
        <List/>
      </div>
  )   
}

export default App
