import React, { useRef, useState } from 'react'
import MemoCard from './MemoCard'

const MemoSlide = ({memoCards}) => {
    const showCard = memoCards.showCard !== undefined ? memoCards.showCard : 3; // 보여줄 card의 default는 4이다.
    const cardWidth = memoCards.width !== undefined ? memoCards.showCard : 310; // 보여줄 card의 default width는 300+10(margin)이다.
    const outerIndex = useRef(showCard); 
    const [marginLeftValue, steMarginLeftValue] = useState(0);

    const leftBtnClick = () => {
        // 첫 번째 카드의 경우 Left로 슬라이드 하지 않는다.
        if(outerIndex.current!==showCard){
          outerIndex.current = outerIndex.current-1;
          steMarginLeftValue(marginLeftValue+cardWidth);
        }
        
      };
      
      const rightBtnClick = () => {
        console.log(outerIndex.current);
        // 슬라이드 카드의 최대 개수의 경우 Right로 슬라이드 하지 않는다.
        if(outerIndex.current!==memoCards.length-1){
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
    <div>
        <MemoCard cardList={memoCards} marginLeftValue={marginLeftValue}/>
        <button onClick={()=>leftBtnClick()}>Left</button><button onClick={()=>rightBtnClick()}>Right</button>
    </div>
  )
}

export default MemoSlide