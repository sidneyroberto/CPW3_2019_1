import React, { Component } from 'react';

import coracaoCheio from '../img/coracao_cheio.png';
import coracaoVazio from '../img/coracao_vazio.png';

class ImagemLista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imagemFavorito: coracaoVazio,
            favorito: false
        };

        this.favoritar = this.favoritar.bind(this);
    }

    favoritar() {
        const favorito = !this.state.favorito;
        const imagemFavorito = favorito
            ? coracaoCheio
            : coracaoVazio;
        this.setState({ imagemFavorito, favorito });
    }

    render() {
        return (
            <div className="imagemLista">
                <img className="imagem" src={this.props.imagem.urlTamanhoMedio} alt="Imagem" />
                <span className="areaFavorito">
                    <button onClick={this.favoritar}>
                        <img src={this.state.imagemFavorito} alt="Favoritar" />
                    </button>
                </span>
            </div>
        );
    }
}

export default ImagemLista;