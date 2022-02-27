import React from "react";
import {Modal,Button } from 'react-bootstrap'

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body dangerouslySetInnerHTML={{__html:"<iframe height='400' width='100%' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' src='https://seths.blog/'  />"}}>
        
        
      </Modal.Body>
      
    </Modal>
    )
}

export default MyVerticallyCenteredModal
