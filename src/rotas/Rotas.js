import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Objetivos from "../Pages/Objetivos/Objetivos";

function Rotas(){

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="sobre" element={ <Sobre/>}/>
            <Route path='objetivo' element={<Objetivos/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;