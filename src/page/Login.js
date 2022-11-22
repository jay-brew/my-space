import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setID] = useState(''); // 아이디
  const [pw, setPw] = useState('');    // 비밀번호
  const idInput = useRef();// nameInput 객체생성 useRef();호출
  const pwInput = useRef();// nameInput 객체생성 useRef();호출

  const navigate = useNavigate();

  // axios.get('http://localhost:4000/cookieCheck', {
  //   withCredentials: true
  // })
  // .then(res=>res.data===true ? navigate("/home") : "");

  // 로그인 버튼 클릭 시 수행
  const loginBtnClick = () => {
    if(id === '') {
      alert("아이디를 입력해 주세요.");
      idInput.current.focus(); //focus api 사용 
      return false;
    } else if(pw === '') {
      alert("비밀번호를 입력해 주세요.");
      pwInput.current.focus(); //focus api 사용 
      return false;
    } else {
      actionLogin()
    }
  };

  const actionLogin = () => {
    axios.post('http://localhost:4000/login', {
      id:id,
      pw:pw
    })
    .then(res=>
      res.data[0].id===undefined ? alert(res.data)
      :
      axios.get('http://localhost:4000/setCookie?id='+id, {
        id:id,
        withCredentials: true,
      })
      .then(res=>navigate("/home"),localStorage.setItem("user",JSON.stringify(res.data[0])))
    );
  };

  const signupButton = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className='login'>
        <div className='loginBorderBox'>
          <div><input id='id' placeholder='아이디를 입력해 주세요.' onChange={(event) => setID(event.target.value)} ref={idInput}/></div>
          <div><input type={"password"} id='pw' placeholder='비밀번호를 입력해 주세요.' onChange={(event) => setPw(event.target.value)} ref={pwInput}/></div>
          <div><button onClick={()=>{loginBtnClick()}}>Login</button></div>
          <div><a onClick={()=>{signupButton()}}>회원가입</a><a>비밀번호찾기</a></div>
        </div>
      </div>
    </div>
  )
}

export default Login