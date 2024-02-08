import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import NotFound from './pages/notfound';
import State from './pages/state';
import PaiFilho from './pages/pai_filho';
import Lista from './pages/lista';
import AutoLista from './pages/autoLista';
import Condicional from './pages/condicional';
import Requisicoes from './pages/requisicoesType';
import RequisicoesAsync from './pages/requisicoesTypeAsync';
import RequisicoesPost from './pages/requisicoesPost';




function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/' element={<Home/>} ></Route> 
        <Route path='/state' element={<State/>} ></Route> 
        <Route path='/pai-filho' element={<PaiFilho/>} ></Route> 
        <Route path='/sobre/:parametro' element={<Sobre/>} ></Route> 
        <Route path='/lista' element={<Lista/>} ></Route> 
        <Route path='/autoLista'element={<AutoLista/>}></Route>
        <Route path='/condicional' element={<Condicional/>} ></Route> 
        <Route path='/requisicao' element={<Requisicoes/>} ></Route> 
        <Route path='/requisicaoAsync' element={<RequisicoesAsync/>} ></Route> 
        <Route path='/requisicoesPost' element={<RequisicoesPost/>} ></Route> 

      </Routes>


      
    </div>
  );
}

export default App;
