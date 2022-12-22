import axios from 'axios';
import React from 'react';
import Popup from './Popup';
import { useState } from 'react'

const Main = () => {
  const [userDetailPopup, setUserDetailPopup] = useState(false); // user 상세 정보 팝업 state

  const logoutButton = () => {
    axios.post('http://localhost:4000/logout', {
      id:'id5'
    })
    .then(res=>
      res.data!=="로그아웃" ? 
      alert(res.data)
        : 
      axios.get('http://localhost:4000/deleteCookie', {
        withCredentials: true
      })
      .then(res=>window.location.href='/')
    );
  };

  // popup으로부터 전달 받은 popup close 수행
  const popupClose = () => {
    setUserDetailPopup(false);
  }

  // user 이미지 클릭 시 user 상세 정보 팝업 노출
  const imgClick = () => {
    // userDetailPopup open(true)/close(false) 처리 
    userDetailPopup === false ? setUserDetailPopup(true) : setUserDetailPopup(false);
  }

  return (
    <div>
      <div className='main'>
        {/* Popup */}
        {userDetailPopup === false ? '' : <Popup popupClose={popupClose}/>}
        {/* left 영역 */}
        <div style={{ border:"1px solid red", width:"15%", padding:"5px"}}>
          Left<label style={{textDecorationLine:"underline", fontSize:"12px", color:"gray", cursor:"pointer", float:"right"}} onClick={()=>{logoutButton()}}>로그아웃</label>
          <div style={{width:"100%", height:"30%", textAlign:"center"}}>
            <div>
              <div>
                <img style={{border:"3px solid red",borderRadius:"30px"}} src={"test.png"} width={"50px"} height={"50px"} onClick={()=>imgClick()}/>
              </div>
              <div>
                <label id="id">{JSON.parse(localStorage.getItem("user")).id}</label>
              </div>
              {/* <div>
                NICK : <label id="nickname">{JSON.parse(localStorage.getItem("user")).nickname}</label>
              </div> */}
            </div>
          </div>
          <div style={{width:"100%", height:"70%"}}>카테고리</div>
        </div>
        {/* rigth 영역 */}
        <div style={{border:"1px solid blue", width:"85%", padding:"5px"}}>
          Right
          <div style={{width:"100%", height:"100%"}}>
              <div style={{width:"100%", height:"10%"}}>one</div>
              <div style={{width:"100%", height:"20%"}}>two</div>
              <div style={{width:"100%", height:"20%"}}>three</div>
              <div style={{width:"100%", height:"50%"}}>four</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main