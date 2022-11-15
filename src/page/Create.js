import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export const Create = () => {
    const [createText, setCreateText] = useState("");

    console.log(createText);


    const createBtnClick = () => {
        axios.post("http://localhost:4000/study/create", {
            createText : createText
        })
    }



  return (
    <div>
        <h1>글쓰기</h1>
        <textarea onChange={(e)=>setCreateText(e.target.value)}></textarea><br/>
        <button onClick={()=>{createBtnClick()}}>등록</button>
    </div>
  )
}
