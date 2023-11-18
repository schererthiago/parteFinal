import { Publi } from "./styled";
import Footer from "../../Components/Footer/Footer";
import HeaderPerfil from "../../Components/HeaderPerfil/HeaderPerfil";
import InfosPerfil from "../../Components/InfosPerfil/InfosPerfil";
import PubliPerfil from "../../Cards/PubliPerfil/PubliPerfil";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


function Perfil() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/post/posts');

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

    return (
        <>
            <HeaderPerfil />
            <Publi>
                <InfosPerfil />
                {posts.map((post, index) => (
                    <PubliPerfil key={index} post={post} conteudo={post.descricao} criado={post.created_at} />
                ))}
            </Publi>
            <Footer />
        </>
    )
}

export default Perfil;