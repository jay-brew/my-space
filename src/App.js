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

  if(document.cookie === "" && document.location.pathname !== "/") {
    if(document.location.pathname !== "/home") {
      window.location.href="/"
    } else {
      if(document.cookie === ""){
        window.location.href="/"
      }
    }
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/b" element={<B />}/>
        <Route path="/c" element={<C />}/>
        <Route path="/d" element={<D />}/>
      </Routes>
    </div>
  );
}

export default App;