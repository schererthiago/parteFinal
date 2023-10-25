import Footer from "../../Components/Footer/Footer"
import HeaderLogin from "../../Components/HeaderLogin/HeaderLogin"
import { Informacoes, Titulo, Texto } from "./styled"

function Objetivos() {
    return (
        <>
            <HeaderLogin />
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