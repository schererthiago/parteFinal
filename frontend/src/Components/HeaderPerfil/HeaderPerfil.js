import { Cabecalho, LogoHeader, Nav, Opcoes, Lista, Link, Botao, BtnSair } from "./styled";
import Logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

function HeaderPerfil(props) {

    const navigate = useNavigate() 

    const goToSobre = ()=>{
        navigate('/sobre')
    }

    const goToObjetivos = ()=>{
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
                        <Lista onClick={()=>navigate('/sobre')}>Sobre</Lista>
                        <Lista onClick={()=>navigate('/objetivos')}>Objetivos</Lista>
                    </Opcoes>
                </Nav>
                <Botao>
                    <BtnSair onClick={handleSubmit}>Sair</BtnSair>
                </Botao>
            </Cabecalho>
        </>
    )
}

export default HeaderPerfil;