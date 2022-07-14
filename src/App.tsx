import { Conteiner } from "./styled";
import Cadastro from "./pages/cadastro/cadastro";
import Login from "./pages/login"
import Deshbord from "./pages/deshbord/deshbord";
import {Route, Routes} from "react-router-dom"
import { useState } from "react";

function App() {

  const [isLogado, setIsLogado] = useState(false);


  return <Conteiner>
    <Routes>
      <Route path = "/" element = {<Login setIsLogado = {setIsLogado} isLogado = {isLogado}/>}/>

      <Route path = "/cadastro" element = {<Cadastro isLogado = {isLogado} />}/>
      <Route path = "/deshbord" element = {<Deshbord  setIsLogado = {setIsLogado} 
                                                      isLogado = {isLogado} />}/>
    </Routes>
  </Conteiner>  
}

export default App;