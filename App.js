
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
     <button 
              variant="outline-primary" 
              id="button"
            
              onClick={handleShow}
              draggable
            >Interview Medias</button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
    Interviews
                </Modal.Title>
              </Modal.Header>
                <Modal.Body>
                
<iframe width="560" height="315" src="https://www.youtube.com/embed/wfcigryIZqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                

                </Modal.Body>
             
            </Modal>
    </div>
  );
}

export default App;
