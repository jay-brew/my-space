import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [createTitleText, setCreateTitleText] = useState("");
    const [createContentText, setCreateContentText] = useState("");
    const navigate = useNavigate();

    const createBtnClick = () => {
        axios.post("http://localhost:4000/study/create", {
            title : createTitleText,
            content : createContentText
        })
        .then(alert("정상적으로 등록되었습니다."),navigate("/study"))
    }

  return (
    <div className='main'>
      <div>
        <h1>글쓰기</h1>
        <label>제목 : </label><input onChange={(e)=>setCreateTitleText(e.target.value)} /><br/>
        <label>내용 : </label><textarea onChange={(e)=>setCreateContentText(e.target.value)}></textarea><br/>
        <button onClick={()=>{createBtnClick()}}>등록</button>
      </div>
    </div>
  )
}