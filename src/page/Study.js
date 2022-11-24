import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Study = () => {
  const [studyList, setStudyList] = useState(null);
  const navigate = useNavigate("");

  useEffect(()=>{
    axios.get("http://localhost:4000/getStudyList")
    .then(res=>setStudyList(res.data))
},[studyList])

  const postClick = (idx) => {
    console.log(idx)
    navigate('/study/post', {state:{idx:idx}})
  };

  return (
    <div>
      Study
      <Link to="/study/create" >글쓰기</Link>
      <table>
        <tbody>
        {studyList&&studyList.map((item,index)=>(<tr onClick={()=>{postClick(item.idx)}} key={index}><td>{item.idx}</td><td>{item.title}</td><td>{item.content}</td></tr>))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Study