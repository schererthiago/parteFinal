import { InfosUsuario, ImagemPerfil, Nome, Abaixo } from "./styled";
import ImgPerfil from "../../Assets/fotoPerfil.png";

function InfosPerfil(props) {
    return (
        <>
            <InfosUsuario>
                <ImagemPerfil src={ImgPerfil} />
                <Nome>{props.user.name}</Nome>
                <Abaixo>Minhas publicações ☟</Abaixo>
            </InfosUsuario>
        </>
    )
}

export default InfosPerfil