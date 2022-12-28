import React from 'react'

const MemoCard = (props) => {
// 슬라이드 카드
const cardList = props.cardList;

  return (
    <div>
      {/* width 가 벗어나서 생긴 가로 스크롤 숨김(overflow:"hidden") */}
      <div style={{width:"300px", height:"300px", border:"1px solid black", margin:"0 auto", overflow:"hidden"}}>
        {/* display flex : 가로 정렬 card 태그 내의 item은 중앙 정렬 */}
        <div style={{display:"flex", height:"100%", width:`${cardList.length}`*300+'px', marginLeft:`${props.marginLeftValue}`+'px', transition:".3s ease-out"}}>
            {cardList.map((item, index)=><div style={{width:"300px", height:"93%", border:"10px solid blue"}} key={index}>{item.card}</div>)}
        </div>
      </div>
      
    </div>
  )
}

export default MemoCard