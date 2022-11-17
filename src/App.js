import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Signup from './page/Signup';
import Home from './page/Home';
import Login from './page/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Study from './page/Study';
import DailyLife from './page/DailyLife';
import News from './page/News';
import Idea from './page/Idea';
import { Create } from './page/Create';
import Post from './page/Post';

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
        <Route path="/study" element={<Study  />}/>
        <Route path="/study/create" element={<Create  />}/>
        <Route path="/study/post" element={<Post />}/>
        <Route path="/dailylife" element={<DailyLife />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/idea" element={<Idea />}/>
      </Routes>
    </div>
  );
}

export default App;