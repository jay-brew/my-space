// import axios from 'axios';
import React from 'react';
import Popup from './Popup';
import { useState } from 'react'
import MemoSlide from './MemoSlide';
import Badge from './Badge';

const Main = () => {
  const [userDetailPopup, setUserDetailPopup] = useState(false); // user 상세 정보 팝업 state
  const cardList = [{card:1},{card:2},{card:3},{card:4},{card:5},{card:6},{card:7},{card:8},{card:9},{card:10}];
  const badgeList = [{badge:"All"},{badge:"HTML/CSS"},{badge:"JavaScript"},{badge:"React"},{badge:"Redux"},{badge:"Node.js"},{badge:"MySQL"},{badge:"TypeScript"}];
  const htmlCssList = [{title:"htmlCssList1"},{title:"htmlCssList2"},{title:"htmlCssList3"},{title:"htmlCssList4"},{title:"htmlCssList5"},{title:"htmlCssList5"},{title:"htmlCssList5"},{title:"htmlCssList5"}];
  const javaScriptList = [{title:"javaScriptList1"},{title:"javaScriptList2"},{title:"javaScriptList3"},{title:"javaScriptList4"},{title:"javaScriptList5"},];

  /*
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
  */

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
        {/* MY */}
        <div style={{width:"100%"}}>
          {/* <label style={{textDecorationLine:"underline", fontSize:"12px", color:"gray", cursor:"pointer", float:"right"}} onClick={()=>{logoutButton()}}>로그아웃</label> */}
          <div style={{width:"100%", height:"30%", textAlign:"center"}}>
            <div>
              <div style={{background:"gray", padding:"20px 0px"}}>
                <img style={{border:"3px solid red",borderRadius:"30px", background:"white"}} src={"test.png"} width={"50px"} height={"50px"} onClick={()=>imgClick()}/><br/>
                <label id="id">{JSON.parse(localStorage.getItem("user")).id}</label><br/>
                <MemoSlide memoCards={cardList}/>
              </div>
              {/* <div>
                NICK : <label id="nickname">{JSON.parse(localStorage.getItem("user")).nickname}</label>
              </div> */}
              <div>
                <div style={{margin:"0px auto", width:"1240px"}}><br/>
                  <div style={{float:"left", margin:"0px 5px 0px 5px", fontSize:"30px"}}>Memo List</div><br/><br/>
                  <div style={{float:"left", margin:"0px 5px 0px 5px"}}>
                    <Badge badges={badgeList} />
                  </div><br/><br/>
                  <div style={{display:"flex"}}>
                    {htmlCssList.map((item,index)=><div style={{width:"200px", height:"300px", borderRight:index===10?"none":"1px solid gray"}}>item</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{width:"100%", height:"70%"}}>카테고리</div> */}
        </div>
      </div>
    </div>
  )
}

export default Main