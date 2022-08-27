import Navbar from "../components/Navbar";
import Losts from "../components/Losts";
import RegisterButton from "../components/RegisterButton";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <RegisterButton />
            <Losts />
        </div>
    )
}

export default Home;
