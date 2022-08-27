import { useContext } from 'react';
import { Context } from '../context/Provider';
import LostCard from './LostCard';

const Losts: React.FC = () => {
    const { losts, searchByCPF } = useContext(Context);
    return (
        <ul className="lost-list">
            {
                losts
                .filter((lost) => lost.cpf.includes(searchByCPF))
                .map((lost) => (
                    <LostCard lost={ lost } key={ lost.id } />
                ))
            }
        </ul>
    )
}

export default Losts;
