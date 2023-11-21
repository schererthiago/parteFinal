import { Barra, Container, Descricao, FooterCard, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, BtnResponder } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import ComentarModal from "../../Components/ComentarModal/ComentarModal";

function Opniao(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user, setUser] = useState()

    function tempoDecorrido(dataIsoString) {
        const timestamp = new Date(dataIsoString).getTime();

        if (isNaN(timestamp)) {
            return 'Data inválida';
        }

        const timestampAtual = new Date().getTime();
        const diferencaEmMilissegundos = timestampAtual - timestamp;

        const minuto = 60 * 1000;
        const hora = minuto * 60;
        const dia = hora * 24;
        const mes = dia * 30;
        const ano = dia * 365;

        if (diferencaEmMilissegundos < minuto) {
            const segundos = Math.round(diferencaEmMilissegundos / 1000);
            return `${segundos} segundo${segundos === 1 ? '' : 's'} atrás`;
        } else if (diferencaEmMilissegundos < hora) {
            const minutos = Math.round(diferencaEmMilissegundos / minuto);
            return `${minutos} minuto${minutos === 1 ? '' : 's'} atrás`;
        } else if (diferencaEmMilissegundos < dia) {
            const horas = Math.round(diferencaEmMilissegundos / hora);
            return `${horas} hora${horas === 1 ? '' : 's'} atrás`;
        } else if (diferencaEmMilissegundos < mes) {
            const dias = Math.round(diferencaEmMilissegundos / dia);
            return `${dias} dia${dias === 1 ? '' : 's'} atrás`;
        } else if (diferencaEmMilissegundos < ano) {
            const meses = Math.round(diferencaEmMilissegundos / mes);
            return `${meses} mês${meses === 1 ? '' : 'es'} atrás`;
        } else {
            const anos = Math.round(diferencaEmMilissegundos / ano);
            return `${anos} ano${anos === 1 ? '' : 's'} atrás`;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/user/${props.post.user_id}`);

                if (response.data.success) {
                    setUser(response.data.data[0])
                } else {
                    console.log("Deu errado")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [props.post.user_id])

    return (
        <>
            {user ? (
                <Container>
                    <Barra>
                        <Perfil>
                            <ImagemPerfil src={ImgPerfil} />
                            <InfPerfil>
                                <Nome>{user.name}</Nome>
                            </InfPerfil>
                        </Perfil>
                        <Tempo>{tempoDecorrido(props.post.created_at)}</Tempo>
                    </Barra>
                    <Descricao>
                        {props.post.descricao}
                    </Descricao>
                    <FooterCard>
                        <BtnResponder onClick={onOpen}>Responder</BtnResponder>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ComentarModal post={props.post} close={onClose} />
                            </ModalContent>
                        </Modal>
                    </FooterCard>
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default Opniao;