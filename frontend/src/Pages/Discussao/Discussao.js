import Opniao from "../../Cards/Opniao/Opniao";
import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado"
// import Discussao from "../../Components/Resposta/Resposta";
import { Publi } from "../Home/styled";

const Discussao = () => {
    return (
        <>
            <HeaderLogado />
            <Publi>
                <Opniao />
            </Publi>
            <Discussao />
            <Footer />
        </>
    )
}

export default Discussao;