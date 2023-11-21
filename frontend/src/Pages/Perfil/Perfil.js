import { Publi } from "./styled";
import Footer from "../../Components/Footer/Footer";
import HeaderPerfil from "../../Components/HeaderPerfil/HeaderPerfil";
import InfosPerfil from "../../Components/InfosPerfil/InfosPerfil";
import PubliPerfil from "../../Cards/PubliPerfil/PubliPerfil";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


function Perfil() {
    const [posts, setPosts] = useState([])
    const idUser = localStorage.getItem("user")
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/post/posts/${idUser}`);

                if (response.data) {
                    setPosts(response.data.data)
                } else {
                    alert('Não foi possível puxar os posts');
                }
            } catch (error) {
                alert('Erro ao buscar os dados. Verifique o console para mais detalhes.');
            }
        };

        fetchData();

    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/user/${idUser}`);

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
    }, [idUser])

    return (
        <>
            {user ? (
                <>
                    <HeaderPerfil />
                    <Publi>
                        <InfosPerfil user={user} />
                        {posts.map((post, index) => (
                            <PubliPerfil key={index} post={post} conteudo={post.descricao} criado={post.created_at} />
                        ))}
                    </Publi>
                    <Footer />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Perfil;