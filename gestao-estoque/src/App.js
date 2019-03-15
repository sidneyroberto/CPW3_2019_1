import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <nav id="menuMobile" className="navbar navbar-expand-md navbar-dark">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>

          <a id="titulo" className="navbar-brand" href="#">Gestão de Estoque</a>
        </nav>

        <div id="banner">
          <h1>Gestão de Estoque</h1>
        </div>

        <div className="container-fluid">

          <div className="row">

            <div id="menu" className="col-md-3">
              Menu
            </div>

            <div className="col-md-9">
              Conteúdo
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
