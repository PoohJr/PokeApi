import Header from './pages/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonData from "./pages/PokemonData.jsx"; // Corrected path
import UserPoke from "./pages/UserPoke.jsx"; // Corrected path
import NonLoad from './pages/NonLoad.jsx';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/pokemonData" element={<PokemonData />} /> 
        <Route path="/userPoke" element={<UserPoke />} /> 
        
        { <Route path="*" element={<NonLoad />} /> }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
