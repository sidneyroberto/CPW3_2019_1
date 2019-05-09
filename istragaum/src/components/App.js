import React, { Component } from 'react';

import './App.css';
import logo from '../img/logo.png';


class App extends Component {
  render() {
    return (
      <div>

        <div id="banner">
          <img src={logo} alt="Logotipo" />
          <span id="separador">|</span>
          <span id="titulo">Istragaum</span>
        </div>

        <div id="perfilUsuario"></div>

        <div id="botoesVisualizacao"></div>

        <div id="conteiner"></div>

      </div>
    );
  }
}

export default App;