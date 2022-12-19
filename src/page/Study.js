import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Post from './Post'

const Study = () => {
  const [studyList, setStudyList] = useState(null);
  const [viewPost, setViewPost] = useState("");
  const [updateIdx, setUpadateIdx] = useState("");

  const getStudyList = (postValue) => {
    axios.get("http://localhost:4000/getStudyList")
    .then(res=>setStudyList(res.data), postValue==="update"?setViewPost(updateIdx):setViewPost(""))
  };

  useEffect(()=>{
    getStudyList()
  },[])

  const postClick = (idx) => {
    console.log(idx)
    setViewPost(idx);
    setUpadateIdx(idx);
  };

  const showPost = (showPost) => { 
    if(showPost=="delete"){getStudyList("delete")} 
    if(showPost=="update"){getStudyList("update")}
  };

  return (
    <div className='main'>
      {/* Left */}
      <div style={{width:"20%", padding:"5px", border:"1px solid red"}}>
        <Link to="/study/create" >글쓰기</Link>
        <table>
          <tbody>
          {studyList!==null&&studyList.map((item,index)=>(<tr onClick={()=>{postClick(item.idx)}} key={index}><td>{item.idx}</td><td>{item.title}</td></tr>))}
          </tbody>
        </table>
      </div>
      {/* Right */}
      <div style={{width:"80%", padding:"5px", border:"1px solid blue"}}>
        {viewPost !== "" ? <Post idx={viewPost} showPost={showPost}/>:''}
      </div>
    </div>
  )
}

export default Study