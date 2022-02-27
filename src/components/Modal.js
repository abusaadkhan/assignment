import React from "react";
import {Form,Card,Button } from 'react-bootstrap'

const Modal = () => {
  return(
    <div className='sidebar' >
      <div className='user'>
        <img />
        <Card className='card'>
            <Card.Body>
            <Card.Title>Hi Reader</Card.Title>
            <Card.Text>Here is your news</Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className='fbBtn' >
          <Card className='card fbCard'>
            <Card.Body>
            <Card.Title>Have a Feedback?</Card.Title>
            <Button className='fbButton' variant="primary">We're Listening!</Button>
            </Card.Body>
          </Card>
      </div>
      <div className='fbForm' >
        <h4>Thank you so much for taking the time!</h4>
        <p>Please provide the below details</p>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control className='input' type="text" placeholder="John" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control className='input' type="text" placeholder="Doe" />
        </Form.Group>
            <Form.Group className="mb-3 address" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Address</Form.Label>
              <Form.Control className='input' as="textarea" rows={3} />
           </Form.Group>
          <Form.Group className="mb-3 emailId" controlId="formBasicEmail">
            <Form.Label className='label' >Email ID</Form.Label>
            <Form.Control className='input' type="email" placeholder="Enter email" />
          
          <Form.Text className='text' >Please enter a valid email</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='input' type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Modal