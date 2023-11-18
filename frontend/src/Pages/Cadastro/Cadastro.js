import React, { useState } from 'react';
import { RegisterPageContainer, RegisterBox, RegisterTitle, FormField, RegisterButton } from './styled';
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';

const Cadastro = () => {
  const[email, setUserEmail] = useState("");
  const[password, setUserPassword] = useState("");
  const[name, setUserName] = useState("");

  const navigate = useNavigate();
  const goToLogin = () =>{
      navigate('/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
        const data = {
            email,
            password,
            name
        };

        console.log(data);
        const response = await api.post('/user/create', data);

        console.log(response.success)
        if (response.data) {
            alert('Usuário cadastrado');
            goToLogin()
        } else {
            alert('Não foi possível cadastrar');
        }   
}

  return (
    <RegisterPageContainer>
      <RegisterBox onSubmit={handleSubmit}>
        <RegisterTitle>Registrar</RegisterTitle>
        <FormField >
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </FormField>
        <RegisterButton>Registrar</RegisterButton>
      </RegisterBox>
    </RegisterPageContainer>
  );
};

export default Cadastro;