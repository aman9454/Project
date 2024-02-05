import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import img1 from './Images/1673521990847.jpg';
import img2 from './Images/Screenshot_20221229-072728_WhatsApp.jpg';
import img3 from './Images/Screenshot_20230213-005112_WhatsApp.jpg';
import img4 from './Images/Screenshot_20230213-185527_WhatsApp.jpg';

function CardComponent() {
  let gallery = [
    { src: img1, title: 'img1' },
    { src: img2, title: 'img2' },
    { src: img3, title: 'img3' },
    { src: img4, title: 'img4' },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container bg-primary">

      <div className="row">
        {gallery.map((item) => (
          <div key={item.title} className="col-sm-3">
            <Card style={{ height: '200px' }} onClick={handleShow}>
              <Card.Img variant="top" src={item.src} height="50px" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Babuu</Card.Text>
               
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <img src={img1}/>
    </Modal.Body>
    
  </Modal>
  </>
  );
}



export default CardComponent;


