import { useContext } from 'react';
import { Context } from '../context/Provider';
import LostCard from './LostCard';


const TBody: React.FC = () => {
    const { losts, searchByCPF } = useContext(Context);
    return (
        <tbody>
            {
                losts
                .filter((lost) => lost.cpf.includes(searchByCPF))
                .map((lost) => (
                    <LostCard lost={ lost } key={ lost.id } />
                ))
            }
        </tbody>
    )
}

export default TBody;
