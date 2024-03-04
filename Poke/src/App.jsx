import Header from './pages/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonData from "./pages/pokemonData.jsx"
import UserPoke from "./pages/userPoke.jsx"
import  NonLoad  from './pages/NonLoad.jsx';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Header/>} />
          <Route  path='PokeMon' element={<PokemonData/>}/>
          <Route  path='UserPoke' element={<UserPoke/>}/>
          <Route  path='*' element={<NonLoad replace to ="404"/>}/>
      </Routes>
    </BrowserRouter>

  )
}


export default App
