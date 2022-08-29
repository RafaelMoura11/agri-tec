import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Provider';

const RegisterButton: React.FC = () => {
    const { losts } = useContext(Context);
    const navigate = useNavigate()

    return (
        <button type="button" className="btn btn-primary" id={ losts.length ? "new-user-button" : '' } onClick={ () => navigate('/register') }>
            Registrar nova perda
        </button>
    )
}

export default RegisterButton;
