import React from "react";
import {Form,Card,Button } from 'react-bootstrap'

const Sidebar = ({setOpenModal,changeLayout}) => {
  
  return(
    <div className=' sidebartoggle' >
      <div className='user'>
        <img />
        <Card className='card'>
            <Card.Body>
            <Card.Title>Hi Reader</Card.Title>
            <Card.Text>Here is your news</Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className='toggleBtn' >
          <Card className='card toggleCard'>
            <Card.Body>
            <Card.Title>View Toggle</Card.Title>
            <Button className='toggleButton' variant="primary" onClick={()=>changeLayout()} >Change Layout</Button>
            </Card.Body>
          </Card>
      </div>
      <div className='fbBtn' >
          <Card className='card fbCard'>
            <Card.Body>
            <Card.Title>Have a Feedback?</Card.Title>
            <Button className='fbButton' variant="primary" onClick={()=>setOpenModal(true)} >We're Listening!</Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  )
}

export default Sidebar