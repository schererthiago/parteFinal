import { Publi, Barra, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, Titulo, BtnResponder } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";

const Opniao = () => {
    return (
        <>
            <Container>
                <Titulo>Assunto tal</Titulo>
                <Barra>
                    <Perfil>
                        <ImagemPerfil src={ImgPerfil} />
                        <InfPerfil>
                            <Nome>Fulano</Nome>
                        </InfPerfil>
                    </Perfil>
                    <Tempo>Há 2 dias</Tempo>
                </Barra>
                <Descricao>
                    Cotas raciais no mundo do trabalho visam promover a inclusão de grupos marginalizados,
                    mas enfrentam críticas por privilegiar determinados grupos em detrimento de outros.
                    Defensores destacam sua importância como medida temporária para reparar desigualdades
                    históricas e promover a representatividade.
                </Descricao>
                <FooterCard>
                    <BtnResponder>Responder</BtnResponder>
                </FooterCard>
            </Container>
        </>
    )
}

export default Opniao;