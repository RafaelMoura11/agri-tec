import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
  onDeleteHandler: () => Promise<void>;
}

const DeleteButton: React.FC<Props> = ({ onDeleteHandler }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button type="button" className="btn btn-danger" id="delete-btn" onClick={ handleShow } >Deletar</button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
            <Modal.Title>Deletar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Tem certeza que gostaria de deletar esta perda?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={ onDeleteHandler }>Sim</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default DeleteButton;
