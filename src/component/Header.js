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
      setScrollCss("")
    }
  }, [scrollY])

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  }

  window.addEventListener('scroll', handleFollow)

  return (
    <div>
      <div className={`header ${scrollCss}`}>
        <Link to={"/"} className={clickText!=='Home'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}}>Home</Link>
        <Link to={"/A"} className={clickText!=='A'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"50px"}}>A</Link>
        <Link to={"/B"} className={clickText!=='B'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>B</Link>
        <Link to={"/C"} className={clickText!=='C'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>C</Link>
        <Link to={"/D"} className={clickText!=='D'?'headerText' : `headerText ${className_click}`} onClick={(e)=>{setClickText(e.target.textContent)}} style={{marginLeft:"30px"}}>D</Link>
        <div style={{marginLeft:"auto" , paddingRight:"50px"}}><input type={Text} placeholder={"검색어를 입력해 주세요."}/></div>
      </div>
      <img height={"200px"} width={"100%"} src='https://mblogthumb-phinf.pstatic.net/MjAxNzExMTRfMjY3/MDAxNTEwNjMxMjkwNjEw.BR9UWMdsQjDkw-wB6me3HLpT8l_fCD_Skqk1inLiwBMg.SrXzW4R9QKllXm0N3NJEdSV1Uw1622SHP8NpfRrAsMEg.PNG.eve708/%EA%B2%A8%EC%9A%B815.PNG?type=w800' />
    </div>
  )
}

export default Header