import React, { Component } from 'react';

import db from '../utils/pouchUtils';
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

    componentDidMount() {
        const codigo = `${this.props.imagem.id}`;
        db.get(codigo)
            .then(
                imagem => {
                    if (imagem) {
                        this.setState({ imagemFavorito: coracaoCheio, favorito: true });
                        this.setState({ id: imagem._id });
                    }
                }
            )
            .catch(erro => console.log(erro));
    }

    favoritar() {
        const favorito = !this.state.favorito;
        const imagemFavorito = favorito
            ? coracaoCheio
            : coracaoVazio;
        this.setState({ imagemFavorito, favorito });

        if (favorito) {
            const imagem = {
                _id: `${this.props.imagem.id}`,
                url: this.props.imagem.urlTamanhoMedio
            };
            db.put(imagem);
        } else {
            const codigo = `${this.props.imagem.id}`;
            db.get(codigo)
                .then(imagem => {
                    imagem._deleted = true;
                    db.put(imagem);
                });
        }
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