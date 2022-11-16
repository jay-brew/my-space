import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Create = () => {
    const [createTitleText, setCreateTitleText] = useState("");
    const [createContentText, setCreateContentText] = useState("");


    const createBtnClick = () => {
        axios.post("http://localhost:4000/study/create", {
            title : createTitleText,
            content : createContentText
        })
    }

  return (
    <div>
        <h1>글쓰기</h1>
        <label>제목 : </label><input onChange={(e)=>setCreateTitleText(e.target.value)} /><br/>
        <textarea onChange={(e)=>setCreateContentText(e.target.value)}></textarea><br/>
        <button onClick={()=>{createBtnClick()}}>등록</button>
    </div>
  )
}