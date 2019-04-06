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
            }
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

        let material = this.state.material;

        database
            .ref('materiais')
            .push(material)
            .then(
                () => {
                    let material = {
                        descricao: '',
                        marca: '',
                        categoria: 'Eletrônicos'
                    };
                    this.setState({ material });
                },
                erro => console.log(erro)
            )
            .catch(erro => console.log(erro));
    }

    aoAlterarValor(evento) {
        const valor = evento.target.value;
        const nome = evento.target.name;

        // Pega a propriedade "material" do state do componente
        let material = { ...this.state.material };
        /*
         * Altera a subpropriedade de "material" cujo nome
         * corresponde ao nome do campo que está sendo alterado
         */
        material[nome] = valor;

        this.setState({ material });
    }

    render() {
        return (
            <div>
                <h3>Novo material</h3>

                <br />

                <div className="row">
                    <div className="col">
                        <span className="alert alert-success">
                            Material salvo
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <span className="alert alert-danger">
                            Ocorreu um problema ao tentar salvar o material
                        </span>
                    </div>
                </div>

                <br />

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
                                    <option value="Eletrônicos">Eletrônicos</option>
                                    <option value="Eletrodomésticos">Eletrodomésticos</option>
                                    <option value="Vestuário">Vestuário</option>
                                    <option value="Higiene Pessoal">Higiene Pessoal</option>
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