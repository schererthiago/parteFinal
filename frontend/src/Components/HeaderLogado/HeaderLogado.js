import { Cabecalho, LogoHeader, Opcoes, Lista, Link, Nav, Botao, BtnPerfil, BtnPubli, BtnSair, BotaoFecharModal, ConteudoModal } from "./styled";
import Logo from "../../Assets/logo.png";
import React, { useState } from 'react';
import PublicarModal from "../PublicarModal/PublicarModal";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

function HeaderLogado() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo} />
                <Nav>
                    <Opcoes>
                        <Lista><Link href="#">Sobre</Link>
                        </Lista>
                        <Lista>
                            <Link href="#">Objetivos</Link>
                        </Lista>
                    </Opcoes>
                </Nav>
                <Botao>
                    <BtnPerfil>Meu perfil</BtnPerfil>

                    <BtnPubli onClick={onOpen}>Publicar</BtnPubli>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <PublicarModal close={onClose} />
                        </ModalContent>
                    </Modal>
                    <BtnSair>Sair</BtnSair>

                </Botao>
            </Cabecalho>
        </>
    )
}

export default HeaderLogado;