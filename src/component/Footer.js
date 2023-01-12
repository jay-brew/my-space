import React from 'react'

const Footer = () => {

  
  return (
    <div>
    {
      window.location.pathname!=='/' ? 
        <div className='footer'>
          <div>Git/jay-brew</div>
          <div>React/Redux(thunk, saga)</div>
          <div>Recoil, Redux Toolkit</div>
          <div>MySQL/MongoDB</div>
        </div>
      :
        ""
    }
    </div>
  )
}

export default Footer