import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado";
import { Informacoes, Titulo, Texto } from "./styled"

function Sobre() {
    return (
        <>
        <HeaderLogado/>
            <Informacoes>
                <Titulo>Sobre</Titulo>
                <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate rerum officiis ullam obcaecati illum delectus magni natus suscipit. Aperiam, repellendus iste consequuntur asperiores explicabo vel rem odio inventore incidunt.
                </Texto>
            </Informacoes>
            <Footer/>
        </>
    )
}

export default Sobre;