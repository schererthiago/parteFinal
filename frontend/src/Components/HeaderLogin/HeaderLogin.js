import { Cabecalho, LogoHeader, BotaoLogin, BotaoCadastrar, Nav, Botoes, Modal, Conteudo, BotaoLog, BotaoCreate, Fechar, Dados, Escrita } from "./styled"
import Logo from "../../Assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';

function HeaderLogin(props) {

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate('/login')

    const goToRegister = ()=>{
        navigate('/cadastro')
    }
    }

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo}/>
                <Nav>
                </Nav>
                <Botoes >
                    <BotaoLogin onClick={()=>navigate('/login')}>Login</BotaoLogin>
                    <BotaoCadastrar onClick={()=>navigate('/cadastro')}>Cadastrar-se</BotaoCadastrar>
                </Botoes>

            </Cabecalho>
        </>
    )
}

export default HeaderLogin;