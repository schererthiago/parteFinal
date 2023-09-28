import Publicacao from "../../Cards/Publicacao/Publicacao"
import Footer from "../../Components/Footer/Footer"
import HeaderLogin from "../../Components/HeaderLogin/HeaderLogin"
import { Publi } from "./styled"


const Home = () => {

    return (

        <>
            <HeaderLogin />
            <Publi>
                <Publicacao />
                <Publicacao />
            </Publi>
            <Footer />

        </>

    )
}

export default Home