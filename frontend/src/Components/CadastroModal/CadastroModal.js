import React, { useState } from 'react';
import { Modal, ConteudoModal, BotaoFechar, Titulo, Dados, Button } from './styled';

const CadastroModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {


  };

  return (
    <Modal>
      <ConteudoModal>
        <BotaoFechar onClick={onClose}>&times;</BotaoFechar>
        <Titulo>Criar Conta</Titulo>
        <Dados
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Dados
          type="text"
          placeholder="Primeiro Nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Dados
          type="text"
          placeholder="Segundo Nome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Dados
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleCreateAccount}>Criar conta</Button>
      </ConteudoModal>
    </Modal>
  );
};

export default CadastroModal;