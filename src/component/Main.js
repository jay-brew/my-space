import axios from 'axios';
import React from 'react'

const Main = () => {
  // const navigate = useNavigate();

  console.log(JSON.parse(localStorage.getItem("user")).id);

  const logoutButton = () => {
    axios.post('http://localhost:4000/logout', {
      id:'id5'
    })
    .then(res=>
      res.data!=="로그아웃" ? 
      alert(res.data) 
        : 
      // navigate("/")
      //window.location.href='/'
      axios.get('http://localhost:4000/deleteCookie', {
        withCredentials: true
      })
      .then(res=>window.location.href='/')
      
    );
  };

  return (
    <div className='main'>
      <div style={{height:"1300px", width:"100%", border:"5px solid red"}}>
        <div style={{display:"flex", justifyContent:"center",border:"5px solid gray"}}>
          <div style={{border:"5px solid black"}}>
            <div style={{height:"200px", width:"200px", border:"5px solid blue", margin:"10px"}}>
              User Info
              <div style={{margin:"13px"}}>
                <div>ID : <label id="id">{JSON.parse(localStorage.getItem("user")).id}</label></div>
                <div>NICK : <label id="nickname">{JSON.parse(localStorage.getItem("user")).nickname}</label></div>
                <div>
                  <a>회원가입</a>
                  <button onClick={()=>{logoutButton()}}>로그아웃</button>
                </div>
              </div>
            </div>
            <div style={{height:"1050px", width:"200px", border:"5px solid green", margin:"10px"}}>어쩌고 저쩌고 리스트</div>
          </div>
          <div style={{border:"5px solid black"}}>
            <div style={{height:"100px", width:"800px", border:"5px solid yellow", margin:"10px"}}>one</div>
            <div style={{height:"300px", width:"800px", border:"5px solid yellow", margin:"10px"}}>two</div>
            <div style={{height:"200px", width:"800px", border:"5px solid yellow", margin:"10px"}}>three</div>
            <div style={{height:"500px", width:"800px", border:"5px solid yellow", margin:"10px"}}>four</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main