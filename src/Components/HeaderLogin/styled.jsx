import { styled } from "styled-components";

export const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #1B3152;
    height: 8vh;
`

export const LogoHeader = styled.img`
    width: 74px;
    height: 74px;
`

export const Nav = styled.nav`

`

export const Botoes = styled.div`

`

export const Opcoes = styled.ul`
    list-style: none;
    display: flex;
`

export const Lista = styled.li`
    margin-right: 20px;
`

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
`

export const BotaoLogin = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const BotaoCadastrar = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`




//modal 
export const Modal = styled.div`
  /* display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #123;
  z-index: 1;
  justify-content: center;
  align-items: center; */
`

export const Conteudo = styled.div`
  background-color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8%;
  height: 49vh;
  width: 14vw;
  text-align: center;
  position: relative;
  justify-content: center;
`

export const Escrita = styled.h2`
  color: #fff;
`

export const Dados = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`
  
export const BotaoLog = styled.button`
  background-color: #2980b9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`
export const BotaoCreate = styled.button`
  background-color: #2980b9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`

export const Fechar = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`