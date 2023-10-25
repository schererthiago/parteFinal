import { Cabecalho, LogoHeader, BotaoLogin, BotaoCadastrar, Nav, Botoes, Modal, Conteudo, BotaoLog, BotaoCreate, Fechar, Dados, Escrita } from "./styled"
import Logo from "../../Assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import ReactModal from 'react-modal';
//import LoginModal from "../../Components/LoginModal/LoginModal";

function HeaderLogin() {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // const closeModal = () => setModalIsOpen(false);
    // const openModal = () => setModalIsOpen(true);

    // const navigate = useNavigate();

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo}/>
                <Nav>
                </Nav>
                <Botoes >
                    <Link to='login'><BotaoLogin>Login</BotaoLogin></Link>
                    <Link to='cadastro'><BotaoCadastrar>Cadastrar-se</BotaoCadastrar></Link>
                </Botoes>

            </Cabecalho>
        </>
    )
}

export default HeaderLogin;