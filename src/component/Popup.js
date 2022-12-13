import React from 'react'

const Popup = (props) => {
    const popupClose = () => {
        // 설정된 props를 통해 부모에 정의된 함수를 호출한다.
        props.popupClose(true);
    };
  return (
    <div 
        style={
            {
                position:"fixed",
                left:100,
                right:0,
                top:100,
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