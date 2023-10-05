import Publicacao from "./Cards/Publicacao/Publicacao";
import HeaderLogado from "./Components/HeaderLogado/HeaderLogado";
import Footer from "./Components/Footer/Footer";
import InfosPerfil from "./Components/InfosPerfil/InfosPerfil";
import { GlobalStyle } from "./Globalstyled";

function App() {
  return (
    <>
    <GlobalStyle/>
    <HeaderLogado/>
    <Publicacao/>
    <Footer/>
    </>
  );
}

export default App;