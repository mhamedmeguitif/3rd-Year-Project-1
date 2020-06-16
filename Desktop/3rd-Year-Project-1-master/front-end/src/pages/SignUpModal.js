import React from 'react'
import  './SignUpModal.css'
import SignUp from './SignUp'
import Modal from 'react-bootstrap/Modal'

function SignUpModal(props) {
    return (
        <div>
            <Modal
      {...props}
      size="lg"
      contentClassName="bg-dark"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Sign-up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUp/>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default SignUpModal
