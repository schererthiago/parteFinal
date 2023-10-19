import { Cabecalho, LogoHeader, BotaoLogin, BotaoCadastrar, Nav, Botoes, Modal, Conteudo, BotaoLog, BotaoCreate, Fechar, Dados, Escrita } from "./styled"
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import ReactModal from 'react-modal';
//import LoginModal from "../../Components/LoginModal/LoginModal";

function HeaderLogin() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => setModalIsOpen(false);
    const openModal = () => setModalIsOpen(true);

    const navigate = useNavigate();

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo}/>
                <Nav>
                </Nav>
                <Botoes >
                    <BotaoLogin onClick={ openModal }>Login</BotaoLogin>
                    <BotaoCadastrar>Cadastrar-se</BotaoCadastrar>
                </Botoes>

                <ReactModal 
                    isOpen={ modalIsOpen } 
                    onRequestClose={ closeModal }
                >
                    <Conteudo>
                        <Fechar onClick={closeModal}>
                        &times;
                        </Fechar>
                        <Escrita>Login</Escrita>
                        <Dados
                        type="text"
                        placeholder="E-mail"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                        <Dados
                        type="password"
                        placeholder="Senha"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        />
                        <BotaoLog /*onClick={handleLogin}*/>Entrar</BotaoLog>
                        <BotaoCreate /*onClick={onCreateAccountClick}*/>Criar conta</BotaoCreate>
                    </Conteudo>
                </ReactModal>

            </Cabecalho>
        </>
    )
}

export default HeaderLogin;