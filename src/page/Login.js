import React from 'react'

const Login = () => {
  return (
    <div>
      <div style={{}}>My Space</div>
      <div className='login'>
        <div className='loginBox'>
          <div>ID : <input type="text" /></div>
          <div>PW : <input type="text" /></div>
          <div><a>회원가입</a><a>비밀번호찾기</a><button>Login</button></div>
        </div>
      </div>
    </div>
  )
}

export default Login