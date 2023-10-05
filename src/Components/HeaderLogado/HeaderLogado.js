import { Cabecalho, LogoHeader, Opcoes, Lista, Link, Nav, Botao, BtnPerfil, BtnPubli, BtnSair } from "./styled";
import Logo from "../../Assets/logo.png";

function HeaderLogado() {
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
                    <BtnPubli>Publicar</BtnPubli>
                    <BtnSair>Sair</BtnSair>
                </Botao>
            </Cabecalho>
        </>
    )
}

export default HeaderLogado;