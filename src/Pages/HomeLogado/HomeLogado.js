import Publicacao from "../../Cards/Publicacao/Publicacao";
import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado";
import { Publi } from "../Home/styled";


const Home = () => {

    return (

        <>
            <HeaderLogado/>
            <Publi>
                <Publicacao />
                <Publicacao />
            </Publi>
            <Footer />

        </>

    )
}

export default Home;