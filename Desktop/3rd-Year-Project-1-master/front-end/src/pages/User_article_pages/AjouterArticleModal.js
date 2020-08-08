import React from 'react'

import Modal from 'react-bootstrap/Modal'
import AjouterArticle from './AjouterArticle'
function AjouterArticleModal(props) {
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
     Add your article 
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <AjouterArticle id={props.id}/>
  </Modal.Body>
  <Modal.Footer>
    
  </Modal.Footer>
</Modal>
    </div>
    )
}

export default AjouterArticleModal
