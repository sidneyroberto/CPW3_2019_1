import React, { Component } from 'react';

import './App.css';
import logo from '../img/logo.png';
import thumb from '../img/thumb.jpg';
import engrenagem from '../img/engrenagem.png';

class App extends Component {
  render() {
    return (
      <div>

        <div id="banner">
          <img src={logo} alt="Logotipo" />
          <span id="separador">|</span>
          <span id="titulo">Istragaum</span>
        </div>




        <div id="perfilUsuario">
          <div id="usuario">
            <div id="thumb">
              <img src={thumb} alt="Thumbnail do usuário" />
            </div>
            <div id="edicao">
              <div id="config">
                <span>sidneyroberto</span>
                <img src={engrenagem} alt="Configurações" />
              </div>
              <div id="areaBotao">
                <button>Editar perfil</button>
              </div>
            </div>
          </div>
          <div id="bio">
            <span id="nomeUsuario">Sidney</span>
            <span id="descricao">Computeiro, professor, fotógrafo, pai e miscelâneas...</span>
          </div>
        </div>





        <div id="botoesVisualizacao"></div>

        <div id="conteiner"></div>

      </div>
    );
  }
}

export default App;