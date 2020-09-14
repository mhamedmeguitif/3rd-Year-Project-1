import React from 'react'
import AjouterConf from '../AjouterConf/AjouterConf'
import Modal from 'react-bootstrap/Modal'
function AjouterConfModal(props) {
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
         Add your conference
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AjouterConf/>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default AjouterConfModal
