import React, { useRef, useState } from 'react'
import MemoCard from './MemoCard'

const MemoSlide = ({memoCards}) => {
    const showCard = memoCards.showCard !== undefined ? memoCards.showCard : 4; // 보여줄 card의 default는 4이다.
    const cardWidth = memoCards.width !== undefined ? memoCards.showCard : 310; // 보여줄 card의 default width는 300+10(margin)이다.
    const outerIndex = useRef(showCard); 
    const [marginLeftValue, steMarginLeftValue] = useState(0);

    const leftBtnClick = () => {
        // 첫 번째 카드의 경우 Left로 슬라이드 하지 않는다.
        if(outerIndex.current!==showCard){
          outerIndex.current = outerIndex.current-1;
          steMarginLeftValue(marginLeftValue+cardWidth);
        } else {
          // 마지막 카드로 가기
          outerIndex.current = memoCards.length;
          steMarginLeftValue(-(cardWidth*(memoCards.length-4)));
        }
        
      };
      
      const rightBtnClick = () => {
        console.log(outerIndex.current);
        // 슬라이드 카드의 최대 개수의 경우 Right로 슬라이드 하지 않는다.
        if(outerIndex.current!==memoCards.length){
          if(outerIndex.current===showCard){
            outerIndex.current = showCard+1;
            steMarginLeftValue(marginLeftValue-cardWidth);
          } else {
            outerIndex.current = outerIndex.current+1;
            steMarginLeftValue(marginLeftValue-cardWidth);
          }
        } else {
          // 첫 번째 카드로 돌아가기
          outerIndex.current = showCard;
          steMarginLeftValue(0);
        }
      };

  return (
    <div style={{display:"inline-flex"}}>
           <div style={{position:"relative", left:"17px", userSelect:"none"}}><div style={{lineHeight:"300px", color:"red", fontSize:"30px", cursor:"pointer"}} onClick={()=>leftBtnClick()}>◀</div></div>
          <MemoCard cardList={memoCards} marginLeftValue={marginLeftValue}/>
          <div style={{position:"relative", right:"17px", userSelect:"none"}}><div style={{lineHeight:"300px", color:"red", fontSize:"30px", cursor:"pointer"}} onClick={()=>rightBtnClick()}>▶</div></div>
    </div>
  )
}

export default MemoSlide