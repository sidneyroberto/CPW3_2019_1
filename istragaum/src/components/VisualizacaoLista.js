import React, { Component } from 'react';

import ImagemLista from './ImagemLista';

class VisualizacaoLista extends Component {

    render() {
        const listaImagens = this.props.imagens
            ? this.props.imagens.map(imagem => {
                return (
                    <ImagemLista key={imagem.id} imagem={imagem} />
                );
            })
            : [];
        return (
            <div>
                {listaImagens}
            </div>
        );
    }
}

export default VisualizacaoLista;