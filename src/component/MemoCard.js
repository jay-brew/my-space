import React, { useRef, useState } from 'react'

const MemoCard = () => {
// 슬라이드 카드
const cardList = [{card:1},{card:2},{card:3},{card:4},{card:5},{card:6},{card:7},{card:8},{card:9},{card:10}]

const outerRef = useRef(0);
const outerIndex = useRef(0);

const [marginLeftValue, steMarginLeftValue] = useState(0);

console.log(`${cardList.length}`*300+'px')

const leftBtnClick = () => {
  // 첫 번째 카드의 경우 Left로 슬라이드 하지 않는다.
  if(outerIndex.current!==0){
    outerIndex.current = outerIndex.current-1;
    steMarginLeftValue(marginLeftValue+300)
  }
};

const rightBtnClick = () => {
  // 슬라이드 카드의 최대 개수의 경우 Right로 슬라이드 하지 않는다.
  if(outerIndex.current!==cardList.length-1){
    outerIndex.current = outerIndex.current+1;
  steMarginLeftValue(marginLeftValue-300);
  }
  
};
  return (
    <div>
      {/* width 가 벗어나서 생긴 가로 스크롤 숨김(overflow:"hidden") */}
      <div style={{width:"300px", height:"300px", border:"1px solid black", margin:"0 auto", overflow:"hidden"}} ref={outerRef}>
        {/* display flex : 가로 정렬 card 태그 내의 item은 중앙 정렬 */}
        <div style={{display:"flex", height:"100%", width:`${cardList.length}`*300+'px', marginLeft:`${marginLeftValue}`+'px', transition:".3s ease-out"}}>
            {cardList.map((item, index)=><div style={{width:"300px", height:"93%", border:"10px solid blue"}} key={index}>{item.card}</div>)}
        </div>
      </div>
      <button onClick={()=>leftBtnClick()}>Left</button><button onClick={()=>rightBtnClick()}>Right</button>
    </div>
  )
}

export default MemoCard