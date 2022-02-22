import React, { useState } from "react";
import Modal from "react-modal";
import './DinoCard.css'

Modal.setAppElement("#root");

function DinoCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img src={props.img} onClick={() => setModalIsOpen(true)} alt="default-dino" />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Dino Library</h2>
        <p>Welcome to default Ark library</p>
        <div>
          <button className="button" onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default DinoCard;

