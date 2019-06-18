import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import logo from '../img/logo.png';
import thumb from '../img/thumb.jpg';
import engrenagem from '../img/engrenagem.png';
import continuo from '../img/continuo.png';
import grade from '../img/grade.png';
import favoritas from '../img/favoritas.png';

import VisualizacaoLista from './VisualizacaoLista';
import VisualizacaoGrade from './VisualizacaoGrade';
import VisualizacaoFavoritas from './VisualizacaoFavoritas';
import ImagemService from '../services/ImagemService';

class App extends Component {

  constructor() {
    super();

    this.state = {
      imagens: [],
      pesquisando: false
    };

    this.servicoImg = new ImagemService();
  }

  componentDidMount() {
    this.setState({
      pesquisando: true
    });

    this.servicoImg
      .pesquisarImagens('natureza')
      .then(resposta => {
        const resultadosPesquisa = resposta.data.hits;
        if (resultadosPesquisa) {
          if (resultadosPesquisa.length > 0) {
            let resultadosAux = resultadosPesquisa.map(resultado => {
              let imagem = {};
              imagem.id = resultado.id;
              imagem.urlPreview = resultado.previewURL;
              imagem.urlTamanhoMedio = resultado.webformatURL;
              imagem.urlTamanhoGrande = resultado.largeImageURL;
              return imagem;
            });

            this.setState({
              imagens: resultadosAux,
              pesquisando: false
            });
          } else {
            this.setState({
              pesquisando: false
            });
          }
        }
      })
      .catch(erro => console.log(erro));
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>

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

        <div id="botoesVisualizacao">
          <Link to="/">
            <img
              src={continuo}
              alt="Visualização em lista"
              className="iconeVisualizacao" />
          </Link>
          <Link to="/grade">
            <img
              src={grade}
              alt="Visualização em grade"
              className="iconeVisualizacao" />
          </Link>
          <Link to="/favoritas">
            <img
              src={favoritas}
              alt="Favoritos"
              className="iconeVisualizacao" />
          </Link>
        </div>

        <div id="conteiner">
          <Switch>
            <Route exact path="/"
              render={(props) => <VisualizacaoLista {...props} imagens={this.state.imagens} />} />
            <Route exact path="/grade" render={(props) => <VisualizacaoGrade {...props} imagens={this.state.imagens} />} />
            <Route exact path="/favoritas" component={VisualizacaoFavoritas} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;