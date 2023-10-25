import { Informacoes, InfosUsuario, ImagemPerfil, Nome } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";

function InfosPerfil() {
    return(
        <>
        <Informacoes>
            <InfosUsuario>
            <ImagemPerfil src={ImgPerfil}/>
            <Nome>Fulano</Nome>
            </InfosUsuario>
        </Informacoes>
        </>
    )
}

export default InfosPerfil