import axios from 'axios';
import React from 'react'

const Signup = () => {
  const signupButton = () => {
    axios.post("http://localhost:4000/signup", {
      idx:"0",
      id:"id",
      password:"password",
      email:"email@email.com"
    })
  };

  return (
    <div>
      <div className='login'>
        <div className='loginBox'>
          <div>아이디 : <input type="text" />중복확인</div>
          <div>비밀번호 : <input type="text" /></div>
          <div>비밀번호 확인 : <input type="text" /></div>
          <div>e-mail : <input type="text" /></div>
          <div onClick={()=>{signupButton()}}>회원가입</div>
        </div>
      </div>
    </div>
  )
}

export default Signup