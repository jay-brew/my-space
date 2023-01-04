import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  let [clickText , setClickText] = useState("Home");
  let [scrollCss , setScrollCss] = useState("");
  let [className_click, setClassName_click] = useState("");
  let [scrollY, setScrollY] = useState(0);
  
  useEffect(()=>{    
    if(window.location.pathname === "/"){setClickText("Home")} else {
      setClickText(window.location.pathname.replace("/","").charAt(0).toUpperCase() + window.location.pathname.replace("/","").slice(1));
    }
    setClassName_click("click");
  }, [clickText])

  useEffect(()=>{
    if(scrollY > 0){
      setScrollCss("blackScroll");
    } else {
      setScrollCss("");
    }
  }, [scrollY])

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  }
  
  // 로그아웃
  const logoutButton = () => {
    axios.post('http://localhost:4000/logout', {
      id:'id5'
    })
    .then(res=>
      res.data!=="로그아웃" ? 
      alert(res.data)
        : 
      axios.get('http://localhost:4000/deleteCookie', {
        withCredentials: true
      })
      .then(res=>window.location.href='/')
    );
  };



  window.addEventListener('scroll', handleFollow);

    return (
      <div>
        {window.location.pathname === '/' || window.location.pathname === "/signup" || window.location.pathname ==="/create" || window.location.pathname ==="/idpwfind"? 
        '' 
        : 
        <div>
          <div className={`header ${scrollCss}`}>
              <Link to={"/home"} className={clickText!=='Home'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}}>Home</Link>
              <Link to={"/study"} className={clickText!=='Study'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Study</Link>
              <Link to={"/daily"} className={clickText!=='Daily'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Daily</Link>
              <Link to={"/news"} className={clickText!=='News'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>News</Link>
              <Link to={"/idea"} className={clickText!=='Idea'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Idea</Link>
              <Link to={"/resume"} className={clickText!=='Resume'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Resume</Link>
              ]<Link to={"/typescript"} className={clickText!=='Typescript'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>TypeScript</Link>
            <div style={{marginLeft:"auto", paddingRight:"20px"}}>
              <input placeholder={"검색어를 입력해 주세요."}/>
              <label style={{textDecorationLine:"underline", fontSize:"18px", marginLeft:"10px" ,color:"white", cursor:"pointer", float:"right"}} onClick={()=>{logoutButton()}}>Logout</label>
            </div>
          </div>
        </div>}
      </div>
    )
}



export default Header