import { Cabecalho, LogoHeader, Opcoes, Lista, Nav, Botao, BtnPerfil, BtnPubli, BtnSair } from "./styled";
import Logo from "../../Assets/logo.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PublicarModal from "../PublicarModal/PublicarModal";
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

function HeaderLogado(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()

    const goToPerfil = () => {
        navigate('/perfil')
    }

    const goToSobre = () => {
        navigate('/sobre')
    }

    const goToObjetivos = () => {
        navigate('/objetivos')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //pega o id no localhost para identificar o usuário
        const id = localStorage.getItem('user');
        if (id) {
            try {
                //limpa o localstorage, apaga também o token
                localStorage.clear()
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo} />
                <Nav>
                    <Opcoes>
                        <Lista onClick={() => navigate('/sobre')}>Sobre</Lista>
                        <Lista onClick={() => navigate('/objetivos')}>Objetivos</Lista>
                    </Opcoes>
                </Nav>
                <Botao>
                    <BtnPerfil onClick={() => navigate('/perfil')}>Meu perfil</BtnPerfil>
                    <BtnPubli onClick={onOpen}>Publicar</BtnPubli>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <PublicarModal close={onClose} />
                        </ModalContent>
                    </Modal>
                    <BtnSair onClick={handleSubmit}>Sair</BtnSair>

                </Botao>
            </Cabecalho>
        </>
    )
}

export default HeaderLogado;