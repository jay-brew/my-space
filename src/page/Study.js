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
  let stateValue = useSelector((state)=>state);

  useEffect(()=>{
    axios.get("http://localhost:4000/getStudyList")
    .then(res=>setStudyList(res.data))
  },[])

  const postClick = (idx) => {
    console.log(idx)
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
      <div>
        <div>
          <button onClick={()=>dispatchClick()}>useDispatch</button>
          <button onClick={()=>selectorClick()}>useSelector</button>
        </div>
      Study
      <Link to="/study/create" >글쓰기</Link>
      <table>
        <tbody>
        {studyList&&studyList.map((item,index)=>(<tr onClick={()=>{postClick(item.idx)}} key={index}><td>{item.idx}</td><td>{item.title}</td><td>{item.content}</td></tr>))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Study