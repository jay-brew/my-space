import React, {useState } from 'react'

const Badge = (props) => {
  const [badgeClick, setBadgeClick] = useState("All");
  const badgeList = props.badges;


  const badgeOnClcik = (e) => {
    setBadgeClick(e.currentTarget.textContent)
  }

  return (
    <div style={{display:"flex"}}>
      {console.log(badgeClick)}
      {badgeList.map((item, index)=><div key={index} style={{border:"1px solid gray", borderRadius:"0.5rem", padding:"3px", margin:"5px 03px 0px 0px", background:item.badge===badgeClick?'gray':"", cursor:"pointer"}} onClick={(e)=>badgeOnClcik(e)}>{item.badge}</div>)}
    </div>
  )
}

export default Badge