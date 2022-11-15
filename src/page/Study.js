import React from 'react'
import { Link } from 'react-router-dom'

const Study = () => {

  return (
    <div>
      Study
      <Link to="/study/create" >글쓰기</Link>
    </div>
  )
}

export default Study