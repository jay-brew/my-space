import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Post = (props) => {
    const [post, setPost] = useState("");
    const [inputDisable, setInputDisable] = useState(true);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [idx, setIdx] = useState("");

    const getPost = async() => {
      axios.get(`http://localhost:4000/getPost/${props.idx}`)
      .then(res=>(setPost(res.data),setIdx(res.data[0].idx),setTitle(res.data[0].title),setContent(res.data[0].content)))
    }
    
    useEffect(()=>{
      getPost();
    },[props.idx]);

    const updateText = () =>{
      inputDisable === true ? setInputDisable(false) : setInputDisable(true);
    };

    const showPost = (showPostVal) => {
      props.showPost(showPostVal)
    }

    const updateButtonClick = () => {
      setIdx(post[0].idx);
      axios.post(`http://localhost:4000/study/update`, {
        title : title,
        content : content,
        idx:idx
      }).then(alert("정상 수정되었습니다."), showPost("update"))
    };

    const deleteButtonClick = () => {
      setIdx(post[0].idx);
      axios.post(`http://localhost:4000/study/delete`, {
        idx: idx
      }).then(alert("정상 삭제되었습니다."), showPost("delete"))
    }; 
    
  return (
    <div>
      <div>
        <div>Post<button onClick={()=>{updateText()}}>수정</button><button onClick={()=>{updateButtonClick()}}>수정하기</button><button onClick={()=>{deleteButtonClick()}}>삭제하기</button></div>
        <div>
          <table>
            <tr><td>{post&&post[0].idx}</td><td><input type="text" id="title" onChange={(e)=>setTitle(e.target.value)} defaultValue={post&&post[0].title} disabled={inputDisable}/></td><td><input type="text" id="title" onChange={(e)=>setContent(e.target.value)} defaultValue={post&&post[0].content} disabled={inputDisable}/></td></tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Post