import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { spaceAction } from '../redux/actions/spaceAction'

const Study = () => {
  const [studyList, setStudyList] = useState(null);
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const [viewPost, setViewPost] = useState("");
  let stateValue = useSelector((state)=>state);

  useEffect(()=>{
    axios.get("http://localhost:4000/getStudyList")
    .then(res=>setStudyList(res.data))
  },[])

  const postClick = (idx) => {
    console.log(idx)
    // post 호출해서 컴포넌트로 사용
    navigate('/study/post', {state:{idx:idx}})
  };


  console.log("stateValue : ")

  const dispatchClick = () => {
      dispatch(spaceAction.addSpace({text:"text"}))
  }

  const selectorClick = () => {
      console.log("state : ", stateValue);
  }
  return (
    <div className='main'>
      {/* Left */}
      <div style={{width:"20%", padding:"5px", border:"1px solid red"}}>
        <Link to="/study/create" >글쓰기</Link>
        <button onClick={()=>dispatchClick()}>useDispatch</button>
        <button onClick={()=>selectorClick()}>useSelector</button>
        <table>
          <tbody>
          {studyList&&studyList.map((item,index)=>(<tr onClick={()=>{postClick(item.idx)}} key={index}><td>{item.idx}</td><td>{item.title}</td></tr>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Study