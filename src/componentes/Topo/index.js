import React from 'react';
import './style.css';

function Topo() {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <img className="topo-logo" src="assets/dente.png" alt="logo dentes saudáveis" title="logo dentes saudáveis" />
        <p className="topo-nome-empresa">Dentes Saudáveis</p>
        <nav className="topo-links">
          <a className="topo-link">Home</a>
          <a className="topo-link">Contato</a>
        </nav>
      </div>
    </header>

  );
}

export default Topo;