import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [email, setEmail] = useState('');

  const Navigate = useNavigate()

  const signupButton = () => {
    axios.post("http://localhost:4000/signup", {
      id:id,
      pw:pw,
      email: email
    })
  };

  const idCheckBtn = async() => {
    const res  = await axios.get('http://localhost:4000/api/get');
    const data = res.data;
  };

  const idCheck = (res) => {

    // console.log(typeof(res.data));
    // console.log(data)
    // data.result[0].map((item,index)=>(
    //   console.log(item.id)
    // ))
  };

  return (
      <div className='signup'>
        <div className='signupBorderBox'>
            <form>
              <div>
                <label>아이디</label><br/>
                <input type="text" onChange={(event)=>{setId(event.target.value)}}/>
                <label style={{cursor:"pointer"}} onClick={()=>{idCheckBtn()}}>중복확인</label>
              </div>
              <div>
                <label>닉네임</label><br/>
                <input type="text" onChange={(event)=>{setNickname(event.target.value)}}/>
                <label style={{cursor:"pointer"}}>중복확인</label>
              </div>
              <div>
                <label>비밀번호</label><br/>
                <input type="text" onChange={(event)=>{setPw(event.target.value)}}/>
              </div>
              <div>
                <label>비밀번호 확인</label><br/>
                <input type="text" onChange={(event)=>{setPwCheck(event.target.value)}}/>
              </div>
              <div>
                <label>e-mail</label><br/>
                <input type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
              </div>
              <div style={{padding:"0px 20px 0px 20px"}}>
                <label style={{padding:"0px 5px 0px 5px", cursor:"pointer"}} onClick={()=>{Navigate("/")}}>로그인</label>
                <label style={{padding:"0px 5px 0px 5px", cursor:"pointer"}} onClick={()=>{signupButton()}}>회원가입</label>
              </div>
          </form>
        </div>
      </div>
  )
}

export default Signup