import Navbar from "../components/Navbar";
import Losts from "../components/Losts";
import RegisterButton from "../components/RegisterButton";
import SearchByCPF from "../components/SearchByCPF";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <RegisterButton />
            <SearchByCPF />
            <Losts />
        </div>
    )
}

export default Home;
