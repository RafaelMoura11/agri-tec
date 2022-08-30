import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
    onSubmitHandler: (e: any) => Promise<void>;
}

const SaveButton: React.FC<Props> = ({ onSubmitHandler }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className="btn btn-primary" id="save-btn" type="button" onClick={ handleShow }>Salvar</button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
            <Modal.Title>Salvar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Tem certeza que gostaria de salvar estas mudanças?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Não
            </Button>
            <Button variant="primary" type="button" onClick={ onSubmitHandler }>Sim</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default SaveButton;
