import Header from './pages/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDet from "./pages/pokemonData.jsx"


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Header/>} />
          <Route  path='PokeMon' element={<PokemonDet/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}


export default App
