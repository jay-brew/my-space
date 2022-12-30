import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './component/Header';
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import Study from './page/Study';
import Daily from './page/Daily';
import News from './page/News';
import Idea from './page/Idea';
import {Create} from './page/Create';
import Post from './page/Post';
import Resume from './page/Resume';
import Idpwfind from './page/Idpwfind';
import TypeScript from './page/TypeScript';

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4000/cookieCheck", {
      withCredentials: true
    })
    .then(res=>loginCheckTrue(res.data))

    const loginCheckTrue = (loginCheckValue) => {
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
        <Route path="/idpwfind" element={<Idpwfind />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/daily" element={<Daily />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/idea" element={<Idea />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/typescript" element={<TypeScript />}/>
        <Route path="/study/create" element={<Create />}/>
        <Route path="/study/post" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;