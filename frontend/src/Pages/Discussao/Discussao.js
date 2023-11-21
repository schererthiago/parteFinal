import { useParams } from "react-router-dom";
import Opniao from "../../Cards/Opniao/Opniao";
import Footer from "../../Components/Footer/Footer";
import HeaderLogado from "../../Components/HeaderLogado/HeaderLogado"
import Resposta from "../../Components/Resposta/Resposta"
// import Discussao from "../../Components/Resposta/Resposta";
import { Publi } from "../Home/styled";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Discussao = () => {
    const params = useParams()
    const [post, setPost] = useState()
    const [comments, setComments] = useState()
    const post_id = params.id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/post/find/${post_id}`);

                if (response.data.success) {
                    setPost(response.data.data[0])
                } else {
                    console.log("Erro")
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [post_id])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/comments/${post_id}`);
                if (response.data.success) {
                    setComments(response.data.data)
                } else {
                    console.log("Erro")
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    })

    return (
        <>
            {post ? (
                <>
                    <HeaderLogado />
                    <Publi>
                        <Opniao post={post} />
                        {comments ? (
                            <>
                                {comments.map((comment, index) => (
                                    <Resposta comment={comment.descricao} user={comment.user_id} key={index} />
                                ))}
                            </>
                        ) : (
                            <></>
                        )}
                    </Publi>
                    <Footer />
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default Discussao;