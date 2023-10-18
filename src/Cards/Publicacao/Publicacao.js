import { Publi, Barra, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, BotaoVer } from "./styled"
import ImgPerfil from "../../Assets/fotoPerfil.png"

function Publicacao(props) {
    return (
        <>
            <Container onClick={props.ir}>
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
                Lorem ipsum dolor sit amet. Et expedita explicabo ea dolore nihil nam voluptatum galisum non ducimus doloribus eos esse tempore. 33 voluptas perferendis rem consectetur cumque sit harum excepturi ab pariatur beatae qui earum quibusdam aut labore corrupti rem sequi Quis! Est galisum quia ut saepe ratione quo tempore eaque a voluptas voluptatem.
                </Descricao>
                <FooterCard>
                    <BotaoVer>Ver discussão</BotaoVer>
                </FooterCard>
            </Container>
        </>
    )
}

export default Publicacao