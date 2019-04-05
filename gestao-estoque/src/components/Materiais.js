import React, { Component } from 'react';
import { database } from '../utils/firebaseUtils';

class Materiais extends Component {

    constructor() {
        super();

        this.state = {
            material: {
                descricao: '',
                marca: '',
                categoria: 'Eletrônicos'
            },
            categorias: []
        };

        /*
         * Dá acesso a tudo o que foi definido
         * dentro do construtor para o método
         * aoAlterarValor.
         */
        this.aoAlterarValor =
            this.aoAlterarValor.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        database
            .ref('categorias')
            .once('value')
            .then(
                snapshot => {
                    const valor = snapshot.val();
                    const chaves = Object.keys(valor);
                    let categorias = [];
                    chaves.map(chave => categorias.push({ id: chave, valor: valor[chave].nome }));
                    this.setState({categorias});
                },
                erro => console.log(erro)
            );
    }

    salvar(evento) {
        evento.preventDefault();

        let material = this.state.material;

        database
            .ref('materiais')
            .push(material)
            .then(
                materialSalvo => console.log(materialSalvo),
                erro => console.log(erro)
            )
            .catch(erro => console.log(erro));
    }

    aoAlterarValor(evento) {
        const valor = evento.target.value;
        const nome = evento.target.name;
        let material = {...this.state.material};
        material[nome] = valor;
        this.setState({material});
    }

    render() {

        const itensCategoria = this.state.categorias.map(categoria => {
            return (
                <option key={categoria.id} value={categoria.valor}>{categoria.valor}</option>
            );
        });

        return (
            <div>
                <h3>Novo material</h3>

                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.salvar}>
                            <div className="form-group">
                                <label>Descrição</label>
                                <input
                                    onChange={this.aoAlterarValor}
                                    value={this.state.material.descricao}
                                    name="descricao"
                                    className="form-control"
                                    required
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Marca</label>
                                <input
                                    onChange={this.aoAlterarValor}
                                    value={this.state.material.marca}
                                    name="marca"
                                    className="form-control"
                                    required
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Categoria</label>
                                <select
                                    onChange={this.aoAlterarValor}
                                    value={this.state.material.categoria}
                                    name="categoria"
                                    required
                                    className="form-control">
                                    {itensCategoria}
                                </select>
                            </div>

                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Salvar" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Materiais;