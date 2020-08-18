import React from 'react'
import SignIn from '../SignIn/SignIn'
import Modal from 'react-bootstrap/Modal'

function SigninModal(props) {
    return (
        <div className="modal">
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Sign-In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignIn/>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default SigninModal
