import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Topo() {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        
        <Link className="topo-logo-box">
          <img className="topo-logo" src="assets/dente.png" alt="logo dentes saudáveis" title="logo dentes saudáveis" />
          <p className="topo-nome-empresa">Dentes Saudáveis</p>
        </Link>
        
        <nav className="topo-links">
          <Link className="topo-link">Home</Link>
          <Link className="topo-link">Contato</Link>
        </nav>
        
      </div>
    </header>

  );
}

export default Topo;