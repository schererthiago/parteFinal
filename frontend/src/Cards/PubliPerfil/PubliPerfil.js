import { Publi, Barra, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, Apagar, BotaoVer } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";
import React, { useState } from 'react';

function PubliPerfil(props) {
    const [isVisible, setIsVisible] = useState(true);

    const handleApagarClick = () => {
        // Define o estado para false para ocultar o card
        setIsVisible(false);
    };

    return (
        <>
            <Container>
                <Barra>
                    <Apagar onClick={handleApagarClick}>Apagar</Apagar>
                </Barra>
                <Descricao>{props.conteudo}</Descricao>
            </Container>
        </>
    )
}

export default PubliPerfil;