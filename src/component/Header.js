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
            <Link to={"/study"} className={clickText!=='B'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>Study</Link>
            <Link to={"/dailylife"} className={clickText!=='C'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>daily life</Link>
            <Link to={"/news"} className={clickText!=='D'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>News</Link>
            <Link to={"/idea"} className={clickText!=='D'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>Idea</Link>
            <input placeholder={"검색어를 입력해 주세요."}/>
          </div>
          {/* <img height={"200px"} width={"100%"} src='https://mblogthumb-phinf.pstatic.net/MjAxNzExMTRfMjY3/MDAxNTEwNjMxMjkwNjEw.BR9UWMdsQjDkw-wB6me3HLpT8l_fCD_Skqk1inLiwBMg.SrXzW4R9QKllXm0N3NJEdSV1Uw1622SHP8NpfRrAsMEg.PNG.eve708/%EA%B2%A8%EC%9A%B815.PNG?type=w800' /> */}
        </div>}
      </div>
    )
}

export default Header