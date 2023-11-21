import { Barra, Container, Descricao, ImagemPerfil, InfPerfil, Nome, Perfil, Tempo, Titulo } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

function Resposta(props) {
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/user/${props.user}`);

                if (response.data.success) {
                    setUser(response.data.data[0])
                } else {
                    console.log("Deu errado")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [props.user])

    return (
        <>
            {user ? (
                <Container>
                    <Barra>
                        <Perfil>
                            <ImagemPerfil src={ImgPerfil} />
                            <InfPerfil>
                                <Nome>{user.name}</Nome>
                            </InfPerfil>
                        </Perfil>
                    </Barra>
                    <Descricao>{props.comment}</Descricao>
                </Container>
            ) : (
                <></>
            )}
        </>
    )
}

export default Resposta;