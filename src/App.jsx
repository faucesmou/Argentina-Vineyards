import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles.css'
import './styles/estilos.css'

import LargeScreenHeader from './components/partials/LargeScreenHeader'
import Header from './components/partials/Header';
import Home from './pages/Home';
import Dueño from './pages/Dueño';
import Winemaker from './pages/Winemaker';
import Finca from "./pages/Finca";
import Contacto from "./pages/Contacto";
import ContactoInicial from "./pages/ContactoInicial";
import Legales from "./pages/Legales";

import LosVinos from "./pages/LosVinos";
import { useState } from "react";
function App() {

    const isAnchoMayorA769 = window.matchMedia("(min-width: 769px)").matches;
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <BrowserRouter>
            <div className="App" id="scroll-animate">
                {isAnchoMayorA769 ? <LargeScreenHeader /> : <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
                
                <Routes>
                    <Route path="/" element={<Home setIsMenuOpen={setIsMenuOpen} />} />;
                    <Route path="/ser-dueno" element={<Dueño setIsMenuOpen={setIsMenuOpen} />} />;
                    <Route path="/winemaker" element={<Winemaker setIsMenuOpen={setIsMenuOpen}  />} />;
                    <Route path="/finca" element={<Finca setIsMenuOpen={setIsMenuOpen}  />} />;
                    <Route path="/contacto" element={<Contacto setIsMenuOpen={setIsMenuOpen} />} />;
                    <Route path="/ContactoInicial" element={<ContactoInicial setIsMenuOpen={setIsMenuOpen} />} />;
                    <Route path="/los-vinos" element={<LosVinos setIsMenuOpen={setIsMenuOpen} />} />;
                    <Route path="/legales" element={<Legales />} />;
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
