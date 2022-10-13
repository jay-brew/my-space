import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setID] = useState(null); // 아이디
  const [password, setPassword] = useState(null);    // 비밀번호
  const nameInput = useRef();// nameInput 객체생성 useRef();호출

  const navigate = useNavigate();

  // 로그인 버튼 클릭 시 수행
  const loginBtnClick = () => {
    if(id === null) {
      console.log("???")
      alert("아이디를 입력해 주세요.");
      nameInput.current.focus();//focus api 사용 //curre
      return false;
    } else if(password === null) {
      alert("비밀번호를 입력해 주세요.");
      nameInput.current.focus();//focus api 사용 //curre
      return false;
    } else {
      navigate("/Home");
    }
  };

  const signupButton = () => {
    navigate("/Signup");
  };
  
  return (
    <div>
      <div className='login'>
        <div className='loginBorderBox'>
          <div><input type="text" id='id' placeholder='아이디를 입력해 주세요.' onChange={(event) => setID(event.target.value)} ref={nameInput}/></div>
          <div><input type="text" id='password' placeholder='비밀번호를 입력해 주세요.' onChange={(event) => setID(event.target.value)} ref={nameInput}/></div>
          <div><button onClick={()=>{loginBtnClick()}}>Login</button></div>
          <div><a onClick={()=>{signupButton()}}>회원가입</a><a>비밀번호찾기</a></div>
        </div>
      </div>
    </div>
  )
}

export default Login