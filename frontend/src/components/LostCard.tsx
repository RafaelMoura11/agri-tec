import { useNavigate } from 'react-router-dom';
import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
}

const LostCard: React.FC<Props> = ({ lost }) => {
    const navigate = useNavigate();
    return (
        <tr className="tbody-row" onClick={ () => navigate(`/details/${lost.id}`) }>
            <td className="text-truncate">{ lost.id }</td>
            <td className="text-truncate">{ lost.name }</td>
            <td className="text-truncate">{ lost.cpf }</td>
            <td className="text-truncate">{ lost.type }</td>
            <td className="text-truncate">{ lost.event }</td>
            <td className="text-truncate">{ lost.date }</td>
        </tr>
    )
}

export default LostCard;
