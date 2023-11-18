import { Informacoes, InfosUsuario, ImagemPerfil, Nome, Abaixo } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";

function InfosPerfil() {
    return(
        <>
        {/* <Informacoes> */}
            <InfosUsuario>
            <ImagemPerfil src={ImgPerfil}/>
            <Nome>Fulano</Nome>
            <Abaixo> minhas publicações ☟</Abaixo>
            </InfosUsuario>
        {/* </Informacoes> */}
        </>
    )
}

export default InfosPerfil