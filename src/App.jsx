import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )   
}

export default App;
