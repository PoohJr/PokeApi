import Header from './Header.jsx'
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

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App
