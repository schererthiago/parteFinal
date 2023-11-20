import Footer from "../../Components/Footer/Footer"
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado"
import { Informacoes, Titulo, Texto } from "./styled"

function Objetivos() {
    return (
        <>
            <HeaderLogado/>
            <Informacoes>
                <Titulo>Objetivo</Titulo>
                <Texto>Bem-vindo a uma comunidade inovadora dedicada à Inteligência Artificial, onde a colaboração, o aprendizado conjunto e a resolução de problemas são elevados a um novo patamar. Este não é apenas um fórum, mas um ecossistema dinâmico onde entusiastas e especialistas se reúnem para compartilhar conhecimento, participar de discussões envolventes e explorar soluções práticas para os desafios mais complexos da IA. Junte-se a nós e faça parte desta comunidade onde a colaboração impulsiona a inovação e a busca pelo conhecimento vai além dos limites convencionais.</Texto>
            </Informacoes>
            <Footer />
        </>
    )
}

export default Objetivos