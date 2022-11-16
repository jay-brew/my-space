import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Study = () => {
  const [studyList, setStudyList] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:4000/getStudyList")
    .then(res=>setStudyList(res.data))
},[])


  return (
    <div>
      Study
      <Link to="/study/create" >글쓰기</Link>
      {studyList&&studyList.map((item,index)=>{console.log(item)})}
    </div>
  )
}

export default Study