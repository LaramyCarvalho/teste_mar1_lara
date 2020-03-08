import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

/**
 * Classe responsavel pelo módulo das empresas cadastradas
 */
export default class Cadastro extends React.Component {

    state = {
        cadastros: [],
        cadastroInfo: {},
        page: 1,
    };

    /**
     * Função para iniciar o método loadCadastros(). 
     */
    componentDidMount(){
        this.loadCadastros();
    };

    /**
     * Função para upload de dados da API cadastros. 
     */
    loadCadastros = async (page=1) => {
        const response = await api.get(`/cadastros?page=${page}`);
        const { docs, ...cadastroInfo} = response.data;
        this.setState({ cadastros: docs, cadastroInfo, page });
    };

    /**
     * Função para paginação (página anterior)
     */
    prevPage = () => {
        const { page, cadastroInfo } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadCadastros(pageNumber);
    };

    /**
     * Função para paginação (próxima página)
     */
    nextPage = () => {
        const { page, cadastroInfo } = this.state;
        if (page === cadastroInfo.pages) return;
        const pageNumber = page + 1;
        this.loadCadastros(pageNumber);

    };

    /**
     * Função para excluir uma empresa específica.
     */
    delete = async (cadastro) => {
        const response = await api.delete(`/cadastros/${cadastro._id}`);
        this.loadCadastros();
    }


    /**
     * Função que renderiza o HTML que exibe as empresas cadastradas.
     */
    render(){
        const { cadastros, page, cadastroInfo } = this.state;

        return (
            <div className="cadastro-list">
                {cadastros.map(cadastro => (
                    <article key={cadastro._id}>
                        <strong>{cadastro.empresa.cnpj}</strong>
                        <p>{cadastro.empresa.razaoSocial}</p>
                        <p>{cadastro.empresa.nomeResponsavel}</p>
                        <p>{cadastro.empresa.cpf}</p>
                        <p>{cadastro.enderecoEmpresa}</p>
                        <p>{cadastro.empresa.bairro}</p>
                        <p>{cadastro.empresa.cep}</p>
                        <p>{cadastro.empresa.cidade}</p>
                        <p>{cadastro.empresa.estado}</p>
                        <p>{cadastro.empresa.complemento}</p>
                        <p>{cadastro.empresa.createdAt}</p>                
                        <button onClick={this.delete.bind(this, cadastro)}>Excluir</button>
                        <Link to={`/atualizar/${cadastro._id}`}>Atualizar</Link>
                    </article>
                ))}
                <div className="actions">
                    <p><Link to={"/"}>Index</Link></p>
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === cadastroInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
    )
    }
};