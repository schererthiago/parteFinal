import { Publi, Barra, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, BtnResponder } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";
import PublicarModal from "../../Components/PublicarModal/PublicarModal";
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

function Opniao(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    {/* <Tempo>Há 2 dias</Tempo> */}
                </Barra>
                <Descricao>
                    Cotas raciais no mundo do trabalho visam promover a inclusão de grupos marginalizados,
                    mas enfrentam críticas por privilegiar determinados grupos em detrimento de outros.
                    Defensores destacam sua importância como medida temporária para reparar desigualdades
                    históricas e promover a representatividade.
                </Descricao>
                <FooterCard>
                    <BtnResponder onClick={onOpen}>Responder</BtnResponder>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <PublicarModal close={onClose}/>
                        </ModalContent>
                    </Modal>
                </FooterCard>
            </Container>
        </>
    )
}

export default Opniao;