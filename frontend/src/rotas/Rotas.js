import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Objetivos from "../Pages/Objetivos/Objetivos";
import Perfil from "../Pages/Perfil/Perfil";
import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import HomeLogado from "../Pages/HomeLogado/HomeLogado";

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='homelogado' element={<HomeLogado/>}/>
            <Route path='sobre' element={<Sobre/>}/>
            <Route path='objetivo' element={<Objetivos/>}/>
            <Route path='perfil' element={<Perfil/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='cadastro' element={<Cadastro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;