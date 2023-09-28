import { Cabecalho, LogoHeader, Opcoes, Lista, Link, BotaoLogin, BotaoCadastrar, Nav, Botoes } from "./styled"
import Logo from "../../Assets/logo.png";

function HeaderLogin() {
    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo}/>
                <Nav>
                    <Opcoes>
                        <Lista><Link href="#">Sobre</Link>
                        </Lista>
                        <Lista>
                            <Link href="#">Objetivos</Link>
                        </Lista>
                    </Opcoes>
                </Nav>
                <Botoes>
                    <BotaoLogin>Login</BotaoLogin>
                    <BotaoCadastrar>Cadastrar-se</BotaoCadastrar>
                </Botoes>
            </Cabecalho>
        </>
    )
}

export default HeaderLogin;