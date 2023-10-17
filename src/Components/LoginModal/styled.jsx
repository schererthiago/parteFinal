import { styled } from "styled-components";

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  justify-content: center;
  align-items: center;
`

export const Conteudo = styled.div`
  background-color: #3498db;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  text-align: center;
  position: relative;
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