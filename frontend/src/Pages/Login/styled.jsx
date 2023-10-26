import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #151F32;
`;

export const LoginBox = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  background: #000000;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: white;
`;

export const FormField = styled.div`
  margin: 10px 0;
  color: white;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 3px 10px;
  border: none;
  border-radius: 8px;
  margin: 0 25px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;