import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {
    const location = useLocation();
    const [post, setPost] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:4000/getPost/${location.state.idx}`)
        .then(res=>setPost(res.data))
    },[])

  return (
    <div>Post
        <tbody>
        <tr><td>{post&&post[0].idx}</td><td>{post&&post[0].title}</td><td>{post&&post[0].content}</td></tr>
        </tbody>
    </div>
  )
}

export default Post