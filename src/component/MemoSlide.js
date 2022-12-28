import React, { useRef, useState } from 'react'
import MemoCard from './MemoCard'

const MemoSlide = () => {
    const cardList = [{card:1},{card:2},{card:3},{card:4},{card:5},{card:6},{card:7},{card:8},{card:9},{card:10}]

    const outerIndex = useRef(0);
    const [marginLeftValue, steMarginLeftValue] = useState(0);

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
        <MemoCard cardList={cardList} marginLeftValue={marginLeftValue}/>
        <button onClick={()=>leftBtnClick()}>Left</button><button onClick={()=>rightBtnClick()}>Right</button>
    </div>
  )
}

export default MemoSlide