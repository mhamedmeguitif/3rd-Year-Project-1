import React from 'react'
import Modal from 'react-bootstrap/Modal'
import galery03 from '../../../../../Global__Image/11.jpg'
function UsersModal(props) {
    
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="modal">
            <Modal
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Sélectionné les évaluateurs 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
                    <div className="card mb-3  ">
                      <div className="row no-gutters card__content ">
                        <div className="col-md-4 Image__Container">
                          <img src={galery03} class="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 card-dec">
                          <div className="card-body">
                            <h2 className="card-title font__simple">Titre d'Article</h2>
                            <p className="card-theme font__simple">Theme</p>
                            <p className="card-auteur font__simple">l'auteur</p>
                             
                            
                            </div>
                        </div>
                      </div>
                    </div>
                  </>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
        </div>
    )
}

export default UsersModal
