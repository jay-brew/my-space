import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Signup from './page/Signup';
import B from './page/B.js';
import C from './page/C';
import D from './page/D';
import Home from './page/Home';
import Login from './page/Login';

function App() {

  useEffect(()=>{
    axios.get('http://localhost:4000/api/get')
    .then(res=>console.log(res));
  });

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/B" element={<B />}/>
        <Route path="/C" element={<C />}/>
        <Route path="/D" element={<D />}/>
      </Routes>
    </div>
  );
}

export default App;