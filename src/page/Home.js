// import axios from 'axios';
import React, { useRef } from 'react';
import Popup from '../component/Popup';
import { useState } from 'react';
import MemoSlide from '../component/MemoSlide';
// import Badge from '..component/Badge';

const Home = () => {
  const [userDetailPopup, setUserDetailPopup] = useState(false); // user 상세 정보 팝업 state
  let x = useRef("");
  let y = useRef("");
  const cardList = [{card:1},{card:2},{card:3},{card:4},{card:5},{card:6},{card:7},{card:8},{card:9},{card:10}];
  const badgeList = [{badge:"All"},{badge:"HTML/CSS"},{badge:"JavaScript"},{badge:"React"},{badge:"Redux"},{badge:"Node.js"},{badge:"MySQL"},{badge:"TypeScript"}];
  const htmlCssList = [{title:"htmlCssList1"},{title:"htmlCssList2"},{title:"htmlCssList3"},{title:"htmlCssList4"},{title:"htmlCssList5"},{title:"htmlCssList5"},{title:"htmlCssList5"},{title:"htmlCssList5"}];
  const javaScriptList = [{title:"javaScriptList1"},{title:"javaScriptList2"},{title:"javaScriptList3"},{title:"javaScriptList4"},{title:"javaScriptList5"},];

  // popup으로부터 전달 받은 popup close 수행
  const popupClose = () => {
    setUserDetailPopup(false);
  }

  // user 이미지 클릭 시 user 상세 정보 팝업 노출
  const usreImgClick = (e) => {
    // userDetailPopup open(true)/close(false) 처리
    userDetailPopup === false ? setUserDetailPopup(true) : setUserDetailPopup(false);
    x.current = e.clientX;
    y.current = e.clientY;
  }

  return (
    <div className='main'>
        {/* Popup */}
        {userDetailPopup === false ? '' : <Popup popupClose={popupClose} left={x.current} top={y.current} />}
        {/* Main */}
        <div className='mainSlideArea'>
          <img style={{border:"3px solid red",borderRadius:"30px", background:"white"}} src={"test.png"} width={"50px"} height={"50px"} onClick={(e)=>usreImgClick(e)}/>
          <label id="id">{JSON.parse(localStorage.getItem("user")).id}</label>
          <MemoSlide memoCards={cardList}/>
        </div>
            {/* <div>
              <div style={{margin:"0px auto", width:"1240px"}}><br/>
                <div style={{float:"left", margin:"0px 5px 0px 5px", fontSize:"30px"}}>Memo List</div><br/><br/>
                  <div style={{float:"left", margin:"0px 5px 0px 5px"}}>
                    <Badge badges={badgeList} />
                  </div><br/><br/>
                  <div style={{display:"flex"}}>
                    {htmlCssList.map((item,index)=><div style={{width:"200px", height:"300px", borderRight:index===10?"none":"1px solid gray"}}>item</div>)}
                  </div>
                  <div style={{border:"1px solid gray", borderRadius:"1rem", margin:"0px auto", marginTop:"10px", width:"10%",}}>
                    Memo Create
                  </div>
                  <div>
                    <h2 style={{textAlign:"left"}}>콘텐츠 추천</h2>
                    <ul style={{display:"flex", listStyleType:"none", justifyContent:"center"}}>
                      <li style={{width:"300px", height:"200px", border:"1px solid blue", marginRight:"10px"}}>
                        a
                      </li>
                      <li style={{width:"300px", height:"200px", border:"1px solid blue", marginRight:"10px"}}>
                        b
                      </li>
                      <li style={{width:"300px", height:"200px", border:"1px solid blue"}}>
                        c
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 style={{textAlign:"left"}}>핫토픽</h2>
                    <div style={{display: "grid", gridTemplateColumns:"200px 200px", gridTemplateRows:"200px 200px", columnGap:"10px", rowGap:"10px"}}>
                      <div style={{border:"1px solid orange"}}>
                        1
                      </div>
                      <div style={{border:"1px solid orange"}}>
                        1-1
                      </div>
                      <div style={{border:"1px solid orange"}}>
                        2 
                      </div>
                      <div style={{border:"1px solid orange"}}>
                        2-1
                      </div>
                    </div>
                  </div>
              </div>
            </div> */}
    </div>
  )
}

export default Home