import React, { Component } from 'react';
import { database } from '../utils/firebaseUtils';

class Materiais extends Component {

    constructor() {
        super();

        this.state = {
            descricao: '',
            marca: '',
            categoria: ''
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

    salvar(evento) {
        evento.preventDefault();

        let material = this.state;

        database
            .ref('materiais')
            .push(material);
    }

    aoAlterarValor(evento) {
        const valor = evento.target.value;
        const nome = evento.target.name;
        this.setState({ [nome]: valor });
    }

    render() {
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
                                    value={this.state.descricao}
                                    name="descricao"
                                    className="form-control"
                                    required
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Marca</label>
                                <input
                                    onChange={this.aoAlterarValor}
                                    value={this.state.marca}
                                    name="marca"
                                    className="form-control"
                                    required
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Categoria</label>
                                <select
                                    onChange={this.aoAlterarValor}
                                    value={this.state.categoria}
                                    name="categoria"
                                    required
                                    className="form-control">
                                    <option>Eletrônicos</option>
                                    <option>Eletrodomésticos</option>
                                    <option>Vestuário</option>
                                    <option>Higiene Pessoal</option>
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