import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  let [clickText , setClickText] = useState("");
  let [scrollCss , setScrollCss] = useState("");
  let [className_click, setClassName_click] = useState("");
  let [scrollY, setScrollY] = useState(0);

  useEffect(()=>{
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

  window.addEventListener('scroll', handleFollow);

    return (
      <div>
        {window.location.pathname === '/' || window.location.pathname === "/signup" || window.location.pathname ==="/create" ? 
        '' 
        : 
        <div>
          <div className={`header ${scrollCss}`}>
              <Link to={"/home"} className={clickText!=='Home'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}}>Home</Link>
              <Link to={"/study"} className={clickText!=='Study'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Study</Link>
              <Link to={"/dailylife"} className={clickText!=='DailyLife'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>DailyLife</Link>
              <Link to={"/news"} className={clickText!=='News'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>News</Link>
              <Link to={"/idea"} className={clickText!=='Idea'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{}}>Idea</Link>
            <div style={{marginLeft:"auto", paddingRight:"20px"}}>
              <input placeholder={"검색어를 입력해 주세요."}/>
            </div>
          </div>
        </div>}
      </div>
    )
}

export default Header