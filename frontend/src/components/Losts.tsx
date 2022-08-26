import { useContext } from 'react';
import { Context } from '../context/Provider';
import LostCard from './LostCard';

const Losts: React.FC = () => {
    const { losts } = useContext(Context);
    return (
        <ul>
            {
                losts.map((lost) => (
                    <LostCard lost={ lost } key={ lost.id } />
                ))
            }
        </ul>
    )
}

export default Losts;
