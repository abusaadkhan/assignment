import React, { useState,useEffect } from "react";
import Axios from 'axios'

import "./App.css";
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal'
import Pagination from "./components/Pagination";
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'



function App() {
 const [posts,setPosts] = useState([])


 
  
  const fetchPosts = async() => {
    const {data} = await Axios.get(' http://api.mediastack.com/v1/news?access_key=985f363243c57c561b4a248d13962cc9&countries=in&limit=30&offset=2')
    setPosts(data.data)
    console.log('response frpm mediastack:',data)
   }


  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <>
    {posts.map((post,index)=>(
      <Card id='card' >
      <Card.Img id="cardImage" variant="top" src={post.image}/>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
        {post.author} {post.source}<br/>
        <a href={post.url}>Read full news</a>
      </Card.Body>
    </Card>
    ))}
    </>
  );
}

export default App;