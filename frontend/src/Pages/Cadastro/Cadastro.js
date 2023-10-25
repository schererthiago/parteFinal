import React, { useState } from 'react';
import { RegisterPageContainer, RegisterBox, RegisterTitle, FormField, RegisterButton } from './styled';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implemente a lógica de registro aqui
  };

  return (
    <RegisterPageContainer>
      <RegisterBox>
        <RegisterTitle>Registrar</RegisterTitle>
        <FormField>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>
        <RegisterButton onClick={handleRegister}>Registrar</RegisterButton>
      </RegisterBox>
    </RegisterPageContainer>
  );
};

export default Cadastro;