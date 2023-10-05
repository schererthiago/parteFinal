import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4vh;
    gap: 3.5vh;
    width: 60vw;
    height: 40vh;
    border-radius: 10px;
    background: #18273F;
`

export const Titulo = styled.p`
    width: auto;
    color: white;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const Barra = styled.div`
    width: auto;
    height: 8.5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Perfil = styled.div`
    width: 20vw;
    height: 8.5vh;
    display: flex;
    flex-direction: row;
    gap: 1vw;
`
export const ImagemPerfil = styled.img`
    width: 8.5vh;
    height: 8.5vh;
    border-radius: 50%;
    background-size: cover;
`
export const InfPerfil = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: center;
`

export const Nome = styled.p`
    color: white;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
`

export const Tempo = styled.p`
    color: var(--base-mid-gray, #7A757D);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`
export const Descricao = styled.p`
    color: white;
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    align-self: stretch;
    margin: 0;
`

export const FooterCard = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5vw;
`

export const BotaoVer = styled.button`
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
`