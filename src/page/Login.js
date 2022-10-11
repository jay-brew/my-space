import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const loginBtnClick = () => {
    navigate("/Home");
  };

  const signupButton = () => {
    navigate("/Signup")
  };
  
  return (
    <div>
      <div className='login'>
        <div className='loginBox'>
          <div>ID : <input type="text" /></div>
          <div>PW : <input type="text" /></div>
          <div><a style={{border:"2px solid orange", cursor:"pointer"}} onClick={()=>{signupButton()}}>회원가입</a><a>비밀번호찾기</a><button onClick={()=>{loginBtnClick()}}>Login</button></div>
        </div>
      </div>
    </div>
  )
}

export default Login