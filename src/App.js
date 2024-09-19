// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Mynav from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Team from './Components/Team/team';
import Partners from './Components/Partners/partners'
import Shop from './Components/Shop/shop'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/partners' element={<Partners/>}/>
          <Route path='/shop' element={<Shop/>}/>




        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
