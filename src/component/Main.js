import React from 'react'

const Main = () => {
  return (
    <div className='main'>
      <div style={{height:"1300px", width:"100%", border:"5px solid yellow"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
          <div>
            <div style={{height:"200px", width:"200px", border:"5px solid yellow", margin:"10px"}}>
              User Info
              <div style={{margin:"13px"}}>
                <div>ID : <input type="text" /></div>
                <div>PW : <input type="text" /></div>
                <div>
                  <a>회원가입</a>
                  <button>Login</button>
                </div>
              </div>
            </div>
            <div style={{height:"1050px", width:"200px", border:"5px solid yellow", margin:"10px"}}>어쩌고 저쩌고 리스트</div>
          </div>
          <div>
            <div style={{height:"100px", width:"800px", border:"5px solid yellow", margin:"10px"}}>one</div>
            <div style={{height:"300px", width:"800px", border:"5px solid yellow", margin:"10px"}}>two</div>
            <div style={{height:"200px", width:"800px", border:"5px solid yellow", margin:"10px"}}>three</div>
            <div style={{height:"500px", width:"800px", border:"5px solid yellow", margin:"10px"}}>four</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main