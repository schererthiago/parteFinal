import Footer from "../../Components/Footer/Footer"
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado"
import { Informacoes, Titulo, Texto } from "./styled"

function Objetivos() {
    return (
        <>
            <HeaderLogado/>
            <Informacoes>
                <Titulo>Objetivo</Titulo>
                <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto voluptatem
                    obcaecati odio. Ea obcaecati voluptate quasi quidem deserunt reiciendis corrupti ducimus, nihil id
                    repudiandae tenetur nostrum aliquid consequuntur veritatis.</Texto>
            </Informacoes>
            <Footer />
        </>
    )
}

export default Objetivos