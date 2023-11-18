import styled from 'styled-components';

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
`;

export const Conteudo = styled.div`
  background-color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 70px;
  width: 510px;
  height: 520px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
`;

export const Titulo = styled.h2`
  color: #fff;
`;

export const Textarea = styled.textarea`
  width: 22vw;
  height: 40vh;
  padding: 10px;
  margin: 10px 0;
`;

export const PublishButton = styled.button`
  background-color: #3498db; /* Azul claro */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;