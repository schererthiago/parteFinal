import { Publi, Barra, Container, Descricao, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, Titulo } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";

function Resposta() {
    return (
        <>
            <Container>
                <Barra>
                    <Perfil>
                        <ImagemPerfil src={ImgPerfil} />
                        <InfPerfil>
                            <Nome>Fulano</Nome>
                        </InfPerfil>
                    </Perfil>
                </Barra>
                <Descricao>
                    Cotas raciais no mundo do trabalho visam promover a inclusão de grupos marginalizados,
                    mas enfrentam críticas por privilegiar determinados grupos em detrimento de outros.
                    Defensores destacam sua importância como medida temporária para reparar desigualdades
                    históricas e promover a representatividade.
                </Descricao>
            </Container>
        </>
    )
}

export default Resposta;