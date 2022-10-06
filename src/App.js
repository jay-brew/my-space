import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import A from './page/A';
import B from './page/B.js';
import C from './page/C';
import D from './page/D';
import Home from './page/Home';

function App() {

  useEffect(()=>{
    axios.get('http://localhost:3000/api/test')
    .then(res=>console.log(res))
  })

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/A" element={<A />}/>
        <Route path="/B" element={<B />}/>
        <Route path="/C" element={<C />}/>
        <Route path="/D" element={<D />}/>
      </Routes>
    </div>
  );
}

export default App;