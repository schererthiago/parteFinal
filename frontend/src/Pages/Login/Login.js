import React, { useState } from "react";
import { LoginPageContainer, LoginBox, LoginTitle, FormField, Button } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('homelogado')
  }

  const handleLogin = () => {
    console.log(email, password)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const credentials = { email, password }

    axios.post('http://localhost:8000/login', credentials, {
      headers: {
        'Content-Type': "aplication/json"
      }
    }).then(response => {
      alert(response.data.message)
      goToHome()
    })
      .catch(error => console.log(error))

  }



  return (
    <LoginPageContainer>
      <LoginBox onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        <FormField>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button onClick={handleLogin}>Login</Button>
        <Button>Criar Conta</Button>
      </LoginBox>
    </LoginPageContainer>
  );
};

export default Login;