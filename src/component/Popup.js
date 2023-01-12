import React from 'react';

const Popup = (props) => {
    const popupClose = () => {
        // 설정된 props를 통해 부모에 정의된 함수를 호출한다.
        props.popupClose(true);        
    };
    console.log("test",props.left)
  return (
    <div 
        style={
            {
                position:"fixed",
                left:props.left,
                right:0,
                top:props.top,
                width:"300px",
                height:"300px",
                background:"white"
            }
        }
    >
    Popup
    <button style={{float:"right"}} onClick={()=>popupClose()}>닫기</button>
    </div>
  )
}

export default Popup