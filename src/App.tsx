import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import NotFound from './pages/notfound';
import State from './pages/state';
import PaiFilho from './pages/pai_filho';


function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound/>} ></Route>
        <Route path='/' element={<Home/>} ></Route> 
        <Route path='/state' element={<State/>} ></Route> 
        <Route path='/pai-filho' element={<PaiFilho/>} ></Route> 
        <Route path='/sobre/:parametro' element={<Sobre/>} ></Route> 
      </Routes>


      
    </div>
  );
}

export default App;
