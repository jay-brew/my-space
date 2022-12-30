import React from 'react';

const MemoCard = (props) => {
// 슬라이드 카드
const cardList = props.cardList;
const cardwith = props.cardWidth === undefined ? '300':props.cardWidth;
const cardHeight = props.height === undefined ? '280':props.height;

  return (
    <div>
      {/* width 가 벗어나서 생긴 가로 스크롤 숨김(overflow:'hidden') */}
      <div style={{width:cardwith*4+40+'px', height:'300px', margin:'0 auto', overflow:'hidden'}}>
        {/* display flex : 가로 정렬 card 태그 내의 item은 중앙 정렬 */}
        <div style={{display:'flex', height:'100%', width:`${cardwith}`*300+'px', marginLeft:`${props.marginLeftValue}`+'px', transition:'.3s ease-out', cursor:'pointer'}}>
            {cardList.map((item, index)=><div style={{width:`${cardwith}`+'px', height:`${cardHeight}`+'px', margin:'10px 5px 10px 5px', borderRadius:'3rem'}} key={index}>{item.card}<img width={300} height={280} src='black.png'></img></div>)}
        </div>
      </div>
    </div>
  )
}

export default MemoCard