import Publicacao from "../../Cards/Publicacao/Publicacao";
import Footer from "../../Components/Footer/Footer";
import HeaderLogin from "../../Components/HeaderLogin/HeaderLogin";
import { Publi } from "./styled";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate('login')
    }

    return (

        <>
            <HeaderLogin/>
            {/* <HeaderLogado/> */}
            <Publi>
                <Publicacao />
                <Publicacao />
            </Publi>
            <Footer />

        </>

    )
}

export default Home;