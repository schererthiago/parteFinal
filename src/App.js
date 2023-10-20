import { ChakraProvider } from '@chakra-ui/react'
import Publicacao from "./Cards/Publicacao/Publicacao";
import HeaderLogado from "./Components/HeaderLogado/HeaderLogado";
import Footer from "./Components/Footer/Footer";
import InfosPerfil from "./Components/InfosPerfil/InfosPerfil";
import { GlobalStyle } from "./Globalstyled";
import Rotas from "./rotas/Rotas";
import Discussao from "./Pages/Discussao/Discussao";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
    <ChakraProvider>

      <GlobalStyle/>
      <Rotas/>

    </ChakraProvider>
    </>
  );
}

export default App;