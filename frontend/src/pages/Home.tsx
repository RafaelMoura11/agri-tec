import { useContext } from 'react';
import { Context } from '../context/Provider';
import Navbar from "../components/Navbar";
import Losts from "../components/Losts";
import RegisterButton from "../components/RegisterButton";
import SearchByCPF from "../components/SearchByCPF";

const Home: React.FC = () => {
    const { losts } = useContext(Context);
    return (
        <div>
            <Navbar />
            { losts.length ? <RegisterButton /> : null }
            <SearchByCPF />
            <Losts />
        </div>
    )
}

export default Home;
