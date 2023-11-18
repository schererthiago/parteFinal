import React, { useState } from "react";
import { LoginPageContainer, LoginBox, LoginTitle, FormField, Button } from "./styled";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';


// function Login(props){

//   const navigate = useNavigate()

//   const goToRegister = ()=>{
//     navigate('/cadastro')
//   }

// }


const Login = () => {
  const[email, setUserEmail] = useState("");
  const[password, setUserPassword] = useState("");

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/homelogado')
  }

  const goToCadastro =()=>{
    navigate('/cadastro')
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        'email':email,
        'password':password
    };
    try{
        console.log(data);
        const response = await api.post('/auth/login', data);
        
        console.log(response.data.message);

        if (response.data.success) {
            alert('Login concluído');
            localStorage.setItem("user", response.data.data.id)
            goToHome()
        } else {
            alert('Não foi possível entrar');
        }
           

    } catch(error){
        console.log(error)
    }
}


  return (
    <LoginPageContainer>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <FormField>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
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
        <Button onClick={handleSubmit}>Login</Button>
        <Button onClick={goToCadastro}>Criar Conta</Button>
      </LoginBox>
    </LoginPageContainer>
  );
};

export default Login;