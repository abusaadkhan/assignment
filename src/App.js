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


 /*http://api.mediastack.com/v1/news?access_key=985f363243c57c561b4a248d13962cc9&countries=in&limit=30&offset=2*/ 
  
  const fetchPosts = async() => {
    const res = await Axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=e9c7984a93e941e19db81ffd6148bee9')
    
    console.log('response frpm mediastack:',res.data.articles)
    setPosts(res.data.articles)
    console.log('response frpm usestate post:',posts)
   }


  useEffect(() => {
    fetchPosts()
  }, [])

  console.log('response frpm usestate post:',posts)

  return (
    <>
    {posts.map((post,index)=>(
      <Card id='card' >
      <Card.Img id="cardImage" variant="top" src={post.urlToImage}/>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
        {post.author} {post.source.id}<br/>
        <a href={post.url}>Read full news</a>
      </Card.Body>
    </Card>
    ))}
    </>
  );
}

export default App;