import Header from './pages/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonData from "./pages/PokemonData.jsx"; // Corrected path
import UserPoke from "./pages/UserPoke.jsx"; // Corrected path
import NonLoad from './pages/NonLoad.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} /> {/* Set the default route */}
        <Route path="/pokemonData" element={<PokemonData />} /> {/* Corrected path */}
        <Route path="/userPoke" element={<UserPoke />} /> {/* Corrected path */}
        {/* Add other routes as needed */}
        {/* <Route path="*" element={<NonLoad />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
