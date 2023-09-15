import { Cabecalho } from "./styled"

function Header() {
    return(
        <>
        <Cabecalho>
            <LogoHeader img={Logo}/>
            <Nav>
            <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Objetivos</a></li>
            </ul>
            </Nav>
            <Botoes>
                <BotaoLogin>Login</BotaoLogin>
                <BotaoCadastrar>Cadastrar-se</BotaoCadastrar>
            </Botoes>
        </Cabecalho>
        </>
    )
}

export default Header