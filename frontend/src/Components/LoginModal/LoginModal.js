import React, { useState } from 'react';
import { Modal, Conteudo, BotaoLog, BotaoCreate, Fechar, Dados, Escrita } from "./styled"

const LoginModal = ({ onClose, onCreateAccountClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, como fazer uma solicitação à API.
    // Se as credenciais estiverem corretas, você pode redirecionar o usuário ou atualizar o estado do aplicativo.
    // Caso contrário, exiba uma mensagem de erro.
  };

  return (
    <Modal>
      <Conteudo>
        <Fechar onClick={onClose}>
          &times;
        </Fechar>
        <Escrita>Login</Escrita>
        <Dados
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Dados
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BotaoLog onClick={handleLogin}>Login</BotaoLog>
        <BotaoCreate onClick={onCreateAccountClick}>Criar conta</BotaoCreate>
      </Conteudo>
    </Modal>
  );
};

export default LoginModal;