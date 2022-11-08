import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Signup from './page/Signup';
import B from './page/B.js';
import C from './page/C';
import D from './page/D';
import Home from './page/Home';
import Login from './page/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loginCookie, setLoginCookie] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4000/cookieCheck", {
      withCredentials: true
    })
    .then(res=>loginCheckTrue(res.data))

    const loginCheckTrue = (loginCheckValue) => {
      setLoginCookie(loginCheckValue);
      if(loginCheckValue === false){
        navigate("/");
      } else {
        if(window.location.pathname === "/"){
          navigate("/home");
        }
      }
    };
  }, [])

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