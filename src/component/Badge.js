import React from 'react'

const Badge = (props) => {
  const badgeList = props.badges;

  return (
    <div>
      {badgeList.map((item, index)=><div key={index} style={{border:"1px solid gray", borderRadius:"1rem"}}>{item.badge}</div>)}
    </div>
  )
}

export default Badge