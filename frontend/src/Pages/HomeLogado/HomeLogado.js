import { useEffect, useState } from "react";
import Publicacao from "../../Cards/Publicacao/Publicacao";
import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado";
import { Publi } from "../Home/styled";
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


    return (

        <>
            <HeaderLogado />
            <Publi>
                {posts.map((post, index) => (
                    <Publicacao key={index} post={post} conteudo={post.descricao} criado={post.created_at}/>
                ))}
            </Publi>
            <Footer />

        </>

    )
}

export default Home;