import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../paginas/Home';
// import Contato from '../paginas/Contato';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/" element={<Contato />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
