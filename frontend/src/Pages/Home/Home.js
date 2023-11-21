import Aviso from "../../Cards/Aviso/Aviso";
import PublicacaoHome from "../../Cards/PublicacaoHome/PublicacaoHome";
import Footer from "../../Components/Footer/Footer";
import HeaderLogin from "../../Components/HeaderLogin/HeaderLogin";
import { Publi } from "./styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const Home = () => {
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

    const navigate = useNavigate()

    return (

        <>
            <HeaderLogin />
            <Publi>
                <Aviso />
                {posts.map((post, index) => (
                    <PublicacaoHome key={index} post={post} id={post.id} conteudo={post.descricao} criado={post.created_at} />
                ))}
            </Publi>
            <Footer />

        </>

    )
}

export default Home;