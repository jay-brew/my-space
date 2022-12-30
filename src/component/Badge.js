import React from 'react'

const Badge = (props) => {
  const badgeList = props.badges;

  return (
    <div style={{display:"flex"}}>
      {badgeList.map((item, index)=><div key={index} style={{border:"1px solid gray", borderRadius:"0.5rem", padding:"3px", margin:"5px 03px 0px 0px", background:item.badge==='All'?'gray':""}}>{item.badge}</div>)}
    </div>
  )
}

export default Badge