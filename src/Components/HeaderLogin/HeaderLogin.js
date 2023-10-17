import { Cabecalho, LogoHeader, Opcoes, Lista, Link, BotaoLogin, BotaoCadastrar, Nav, Botoes } from "./styled"
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

function HeaderLogin() {

    const navigate = useNavigate()

    return (
        <>
            <Cabecalho>
                <LogoHeader src={Logo}/>
                <Nav>
                    {/* <Opcoes>
                        <Lista><Link href="#">Sobre</Link>
                        </Lista>
                        <Lista>
                            <Link href="#">Objetivos</Link>
                        </Lista>
                    </Opcoes> */}
                </Nav>
                <Botoes>
                    <BotaoLogin onClick={()=>{navigate('/LoginModal')}}>Login</BotaoLogin>
                    <BotaoCadastrar>Cadastrar-se</BotaoCadastrar>
                </Botoes>
            </Cabecalho>
        </>
    )
}

export default HeaderLogin;