import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado";
import { Informacoes, Titulo, Texto } from "./styled"

function Sobre() {
    return (
        <>
        <HeaderLogado/>
            <Informacoes>
                <Titulo>Sobre</Titulo>
                <Texto>Este fórum é fruto de uma pesquisa de dois anos no Colégio Senac, oferece um ambiente dinâmico onde programadores, pesquisadores e entusiastas da IA tem a oportunidade de colaborar com este espaço. Este é um ambiente onde a diversidade de conhecimento enriquece a comunidade e impulsiona o campo da Inteligência Artificial para novos patamares. Junte-se a nós para explorar, aprender e conectar-se com mentes inovadoras na área da IA!
                </Texto>
            </Informacoes>
            <Footer/>
        </>
    )
}

export default Sobre;