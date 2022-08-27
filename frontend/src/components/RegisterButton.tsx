import { useNavigate } from 'react-router-dom';

const RegisterButton: React.FC = () => {
    const navigate = useNavigate()

    return (
        <button type="button" className="btn btn-primary" id="new-user-button" onClick={ () => navigate('/register') }>
            Registrar nova perda
        </button>
    )
}

export default RegisterButton;
