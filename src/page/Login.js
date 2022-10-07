import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const loginBtnClick = () => {
    navigate("/Home");
  };

  return (
    <div>
      <div className='login'>
        <div className='loginBox'>
          <div>ID : <input type="text" /></div>
          <div>PW : <input type="text" /></div>
          <div><a>회원가입</a><a>비밀번호찾기</a><button onClick={()=>{loginBtnClick()}}>Login</button></div>
        </div>
      </div>
    </div>
  )
}

export default Login