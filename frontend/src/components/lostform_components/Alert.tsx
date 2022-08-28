import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LostInterface from '../../interfaces/LostInterface';
import { useEffect, useLayoutEffect } from 'react';

type Props = {
  alert: { show: boolean, lostId: number };
  setAlert: React.Dispatch<React.SetStateAction<{show: boolean; lostId: number}>>
}

const DeleteButton: React.FC<Props> = ({ alert, setAlert }) => {

    useEffect(() => {
        return () => {
            setAlert({ show: false, lostId: 0 })
        }
      }, [])

    return (
        <>
            <Modal
                show={alert.show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                <Modal.Title>Aviso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Possui um evento divergente em um raio de 10 km nessa mesma data:
                </Modal.Body>
                <Modal.Footer>
                <a href={ `/details/${alert.lostId}` }>
                    <Button variant="primary">
                        Verificar
                    </Button>
                </a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteButton;
