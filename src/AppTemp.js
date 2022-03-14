import React, { useState,useEffect } from "react";
import Axios from 'axios'

import "./App.css";
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal'
import Pagination from "./components/Pagination";
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'



function AppTemp2() {
 const [posts,setPosts] = useState([])
  const [layout,setLayout] = useState('grid')
  const[containerBlur,setContainerBlur] = useState('containerBlur')
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [openModal,setOpenModal] = useState(false)
  const [modalShow, setModalShow] = useState(false);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
 /* 
  const fetchPosts = async() => {
    const response = await Axios.get(' https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
   }*/

   const fetchPosts = async() => {
    const res = await Axios.get(' https://newsapi.org/v2/top-headlines?country=us&apiKey=e9c7984a93e941e19db81ffd6148bee9')
    
    console.log('response frpm mediastack:',res.data.articles)
    setPosts(res.data.articles)
    console.log('response frpm usestate post:',posts)
   }

  const deletePost = (id) =>{
    setPosts(posts.filter(detail => detail.id!==id ))
  }
  const changeLayout = () =>{
    setLayout(layout==='grid'? 'list' : 'grid')
    /*setShowPerPage(layout==='grid'? 10 : 5)*/
    console.log('set show per page:', showPerPage)
  }
  const changeContainerBlur = () =>{
    setContainerBlur(openModal? 'containerBlur' : '')
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  useEffect(() => {
    changeContainerBlur()
  }, [openModal])

  return (
    <>
    <div className="App">
    {openModal? (<Modal/>) : (<Sidebar setOpenModal={setOpenModal} changeLayout={changeLayout} />)}
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div>
      <div className={containerBlur} >
      <div className="container containerNew "  onClick={()=>setOpenModal(false)}>
      <div className={layout} >
      
        {posts.slice(pagination.start, pagination.end).map((post) => (
          <div className="cardDiv mb-3" 
               key={post.id} 
               >
               <Card onClick={()=>setModalShow(true)} className='newsCard' >
               <Card.Body>
                   <Card.Title>
                       <h2>{post.title}</h2>
                   </Card.Title>
                   <Card.Text>
                       {post.body}
                   </Card.Text>
               </Card.Body>
             </Card>
             <span className="newsCardBtn" onClick={()=> deletePost(post.id) } >	&#10007;</span>
          </div>
        ))}
      
        </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={posts.length}
      />
    
    </div>
    </div>
      </div>
   
      
    </div>
    </>
  );
}

export default AppTemp2;