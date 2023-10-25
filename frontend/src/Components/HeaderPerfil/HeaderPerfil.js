

function HeaderPerfil() {
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
                    <BtnSair>Sair</BtnSair>
                </Botao>
            </Cabecalho>
        </>
    )
}