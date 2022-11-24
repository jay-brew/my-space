import axios from 'axios';
import React from 'react'

const Main = () => {

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

  return (
    <div>
      <div className='main'>
        <div style={{width:"100%", height:"100%", border:"1px solid red"}}>
          <div style={{height:"100%", display:"flex", justifyContent:"center"}}>
            
            <div style={{width:"16%", height:"96%", padding:"2%", border:"1px solid blue"}}>
              <div style={{width:"100%", height:"20%"}}>
                User Info
                <div>
                  <div>ID : <label id="id">{JSON.parse(localStorage.getItem("user")).id}</label></div>
                  <div>NICK : <label id="nickname">{JSON.parse(localStorage.getItem("user")).nickname}</label></div>
                  <div>
                    <a>회원가입</a>
                    <button onClick={()=>{logoutButton()}}>로그아웃</button>
                  </div>
                </div>
              </div>
              <div style={{width:"100%", height:"80%"}}>카테고리</div>
            </div>
            
            <div style={{width:"76%", height:"96%", padding:"2%", border:"1px solid red"}}>
              <div style={{width:"100%", height:"10%"}}>one</div>
              <div style={{width:"100%", height:"20%"}}>two</div>
              <div style={{width:"100%", height:"20%"}}>three</div>
              <div style={{width:"100%", height:"50%"}}>four</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Main