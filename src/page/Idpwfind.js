import React from 'react'
import { useState } from 'react';

const Idpwfind = () => {
    // 1. 두 개의 tab이 존재한다.
    // 2. A탭을 누르면 A탭의 title과 content를 보여준다.
    // 3. B탭을 누르면 B탭의 title과 content를 보여준다.
    const [tabClick, setTabClick] = useState(0);
    console.log(tabClick)

  return (
    <div>
        {/* class 수정 필요 */}
        <div className='login'>
            <div className='loginBorderBox'>
                <label onClick={()=>setTabClick(0)}>Tab A</label><label onClick={()=>setTabClick(1)}>Tab B</label>
                {tabClick === 0 ? <div>Tab A content</div> : <div>Tab B content</div>}
            </div>
        </div>
    </div>
  )
}

export default Idpwfind