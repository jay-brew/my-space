import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import crypto from 'crypto-js';

const Signup = () => {
  const [id, setId] = useState(''); // 아이디
  const [idMessage, setIdMessage] = useState(''); // 아이디 유효성 검사 메시지
  const [idCheckColor, setIdCheckColor] = useState('red');  // 아이디 체크 메시지 컬러

  const idInput = useRef();
  const nicknameInput = useRef();
  const pwInput = useRef();
  const rePwInput = useRef();
  const emailInput = useRef();

  const [pw, setPw] = useState(''); // 비밀번호
  const [rePw, setRePw] = useState(''); // 비밀번호 확인
  const [pwMessage, setPwMessage] = useState(''); // 비밀번호 유효성 검사 메시지
  const [pwCheckColor, setPwCheckColor] = useState('red');  // 비밀번호 체크 메시지 컬러

  const [nickname, setNickname] = useState(''); // 닉네임
  const [nicknameMessage, setNicknameMessage] = useState(''); // 닉네임 유효성 검사 메시지
  const [nicknameCheckColor, setNicknameCheckColor] = useState('red'); // 닉닉네임 체크 메시지 컬러

  const [email, setEmail] = useState(''); // 이메일
  const [emailMessage, setEmailMessage] = useState(''); // 이메일 유효성 검사 메시지
  const [emailCheckColor, setEmailCheckColor] = useState('red'); // 이메일 유효성 체크 메시지 컬러

  const Navigate = useNavigate();

  const signupButton = () => {

    const checkColorList = [{id:idCheckColor}, {password:pwCheckColor}, {nickname:nicknameCheckColor}, {email:emailCheckColor}];
    const colorCheck = new Array();
    checkColorList.map((item,index) => {
        if(item.id === "red"){
          colorCheck.push("id ");
          return item;
        } else if(item.password === "red"){
          colorCheck.push("password ");
          return item;
        } else if(item.nickname === "red"){
          colorCheck.push("nickname ");
          return item;
        } else if(item.email === "red"){
          colorCheck.push("email ");
          return item;
        } else {
          return item;
        }
    })

    if(colorCheck.length !== 0){
      alert(colorCheck+"을(를) 확인해 주세요.");
      return false;
    } else {
      axios.get('http://localhost:4000/api/get', {responseType: "json"})
      .then((res)=>{
        const checkDataList = res.data;
        let idFlag = false;
        let nicknameFlag = false;
        const check = checkDataList.find((item,index)=>{
          if(item.id === id || item.nickname === nickname){
            if(item.id === id){
              idFlag = true;
            }
            if(item.nickname === nickname){
              nicknameFlag = true;
            }
            return true;
          }
        });
        if(check === undefined){
          alert("회원가입 완료!");
          const pwCrypto = crypto.AES.encrypt(pw, 'secret key').toString();
          axios.post("http://localhost:4000/signup", {
            id:id,
            pw:pwCrypto,
            nickname:nickname,
            email: email
          })
        } else {
          alert("회원가입 오류! 아이디 혹은 닉네임이 이미 존재합니다.");
          if(idFlag===true){
            setIdMessage("이미 사용중인 아이디입니다.");
            setIdCheckColor('red');
          }
          if(nicknameFlag===true){
            setNicknameMessage("이미 사용중인 닉네임입니다.");
            setNicknameCheckColor('red');
          }
        }
      })
    }
  };

  const checkValue = (checkName) => {
    axios.get('http://localhost:4000/api/get', {
      responseType: "json"}).then((res)=>{
      const checkDataList = res.data;
      const check = checkDataList.find((item,index)=>{
        if(checkName==='id' ? id === item[checkName] : nickname === item[checkName]){return true;}
      });
      if(checkName === 'id') {
        if(id.length === 0){
          alert("아이디를 입력해 주세요.");
          idInput.current.focus();
          return false;
        } else {
          if(check!==undefined){
            setIdMessage("이미 사용중인 아이디입니다.");
            setIdCheckColor('red');
          } else {
            setIdMessage("사용 가능한 아이디입니다.");
            setIdCheckColor('blue');
          }
        }
      } else {
        if(nickname.length === 0){
          alert("닉네임을 입력해 주세요.");
          nicknameInput.current.focus();
          return false;
        } else {
          if(check!==undefined){
            setNicknameMessage("이미 사용중인 닉네임입니다.");
            setNicknameCheckColor('red');
          } else {
            setNicknameMessage("사용 가능한 닉네임입니다.");
            setNicknameCheckColor('blue');
          }
        }
      }
    });
  };

  // 아이디
  useEffect(()=>{
    let checkKorean = /[ㄱ-ㅎ|ㅏ-ㅓ|가-힣]/;
    if(3 > id.length && id.length> 0){
      if(checkKorean.test(id)===true){
        setIdMessage("id는 한글이 불가합니다.");
        setIdCheckColor('red');
      } else {
        setIdMessage("세 글자 이상 입력해 주세요.");
        setIdCheckColor('red');
      }
    }else {
      if(checkKorean.test(id)===true){
        setIdMessage("id는 영어, 숫자만 가능합니다.");
        setIdCheckColor('red');
      } else {
        if(id.length === 0){
          setIdMessage('');
        } else {
          setIdMessage('아이디 중복확인 클릭(필수)');
          setIdCheckColor('red');
        }
      }
    }
  },[id]);

  // 닉네임
  useEffect(()=>{
    if(2 > nickname.length && nickname.length> 0){
      setNicknameMessage("두 글자 이상 입력해 주세요.");
      setNicknameCheckColor('red');
    } else {
      if(nickname.length === 0){
        setNicknameMessage('');
      } else {
        setNicknameMessage('닉넨임 중복확인 클릭(필수)');
        setNicknameCheckColor('red');
      }
    }
  },[nickname]);

  // 비밀번호, 비밀번호 확인
  useEffect(()=>{
    if(pw !== ""){
      if(pw === rePw){
        setPwMessage('비밀번호 일치');
        setPwCheckColor("blue");
      } else {
        setPwMessage('비밀번호 불일치');
        setPwCheckColor("red");
      }
    } else {
      setPwMessage('');
    }
    
  },[pw, rePw]);

  // 이메일
  useEffect(()=>{
    const emailCheck = new RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    if(email!==""){
      if(emailCheck.test(email)){
        setEmailMessage('이메일 양식이 올바릅니다.');
        setEmailCheckColor('blue');
      }else{
        setEmailMessage("이메일 양식이 올바르지 않습니다.");
        setEmailCheckColor('red');
      }
    } else{
      setEmailMessage('')
    }
  },[email]);

  return (
      <div className='signup'>
        <div className='signupBorderBox'>
            <form>
              <div className='signupRow'>
                <label>아이디</label><br/>
                <input type="text" onChange={(event)=>{setId(event.target.value)}} ref={idInput}/>
                <label style={{cursor:"pointer"}} onClick={()=>{checkValue('id')}}>중복확인</label><br/>
                <div style={{height:"15px"}}><label style={{fontSize:"13px", color:`${idCheckColor}`, fontWeight:"bold"}}>{idMessage}</label></div>
              </div>
              <div className='signupRow'>
                <label>닉네임</label><br/>
                <input type="text" onChange={(event)=>{setNickname(event.target.value)}} ref={nicknameInput}/>
                <label style={{cursor:"pointer"}} onClick={()=>checkValue('nickname')}>중복확인</label><br/>
                <div style={{height:"15px"}}><label style={{fontSize:"13px", color:`${nicknameCheckColor}`, fontWeight:"bold"}}>{nicknameMessage}</label></div>
              </div>
              <div className='signupRow'>
                <label>비밀번호</label><br/>
                <input type="password" onChange={(event)=>{setPw(event.target.value)}} ref={pwInput}/><br/><br/>
                <label>비밀번호 확인</label><br/>
                <input type="password" onChange={(event)=>{setRePw(event.target.value)}} ref={rePwInput}/><br/>
                <div style={{height:"15px"}}><label style={{fontSize:"13px", color:`${pwCheckColor}`, fontWeight:"bold"}}>{pwMessage}</label></div>
              </div>
              <div className='signupRow'>
                <label>e-mail</label><br/>
                <input type="email" onChange={(event)=>{setEmail(event.target.value)}} ref={emailInput}/><br/>
                <div style={{height:"15px"}}><label style={{fontSize:"13px", color:`${emailCheckColor}`, fontWeight:"bold"}}>{emailMessage}</label></div>
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