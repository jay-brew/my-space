import axios from 'axios';
import React, { useRef } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Idpwfind = () => {    
  const [tabClick, setTabClick] = useState(0);  // Tab0 : 아이디 찾기, Tab1: 비밀번호 찾기
  const navigator = useNavigate("");
  const [inputs, setInputs] = useState({
    id:"",
    nickname:"",
    email:""
  })
  const idInput = useRef(""); // id input 
  const nicknameInput = useRef() // nickname input
  const emailInput = useRef(""); // email input

  const findButtonClick = () => {
    if(tabClick === 0){
      if(inputs['nickname'] === '') {
        alert("닉네임을 입력해 주세요.");
        nicknameInput.current.focus(); //focus api 사용 
        return false;
      } else if(inputs['email'] === '') {
        alert("이메일을 입력해 주세요.");
        emailInput.current.focus(); //focus api 사용 
        return false;
      }
      axios.post('http://localhost:4000/idpwfind', {
        nickname : inputs['nickname'],
        email:inputs['email']
      })
      .then(res=>{
        res.data === "일치하는 정보가 없습니다." ? alert(res.data) : alert("고객님의 아이디는 "+res.data+" 입니다.")
      }) 
    } else {
      if(inputs['id']  === '') {
        alert("아이디를 입력해 주세요.");
        idInput.current.focus(); //focus api 사용 
        return false;
      } else if(inputs['email'] === '') {
        alert("이메일을 입력해 주세요.");
        emailInput.current.focus(); //focus api 사용 
        return false;
      }
      axios.post('http://localhost:4000/idpwfind', {
        id : inputs['id'],
        email:inputs['email']
      })
      .then(res=>{
        res.data === "일치하는 정보가 없습니다." ? alert(res.data) : alert("고객님의 비밀번호는 "+res.data+" 입니다.")
      }) 
    }
  }

  const goLoginPage = () => {
    navigator("/");
  }

  return (
    <div>
        <div>
            <div>
            <label style={{textDecorationLine:"underline", fontSize:"18px", marginLeft:"10px", cursor:"pointer"}} onClick={()=>{goLoginPage()}}>Login</label>
                <label onClick={()=>setTabClick(0)} style={{border:"3px solid red"}}>아이디 찾기</label><label onClick={()=>setTabClick(1)} style={{border:"3px solid red"}}>비밀번호 찾기</label><button onClick={()=>findButtonClick()}>확인</button>
                {tabClick === 0 ?
                  <div>
                    닉네임<input onChange={(e)=>setInputs({...inputs, ['nickname']:e.target.value})} ref={nicknameInput}/><br/>
                    이메일<input onChange={(e)=>setInputs({...inputs, ['email']:e.target.value})} ref={emailInput}/>
                  </div>
                :
                  <div>
                    아이디<input onChange={(e)=>setInputs({...inputs, ['id']:e.target.value})} ref={idInput} /><br/>
                    이메일<input onChange={(e)=>setInputs({...inputs, ['email']:e.target.value})} ref={emailInput}/>
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Idpwfind