import React, { Component } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";

/**
 * Classe responsavel pelo módulo de atualização das empresas
 */
export default class Atualizar extends React.Component {

  constructor(props){
    super(props); 

    this.state = {
      id: 0,
      empresa : {}
   }

    const idEnviado = this.props.match.params.id;
 
    this.pegarEmpresaPeloId(idEnviado);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Função para obter uma empresa específica da API Cadastro.
   */
  pegarEmpresaPeloId = async (idEnviado) => {
    const response = await api.get(`/cadastros/${idEnviado}`);             
    const data = response.data;
    const emp = data.empresa;
    console.log(data);
    console.log(emp);
    this.setState({id:data._id})
    this.setState({ empresa: emp });
  }
  
 
  /**
   * Função para envio dos dados atulizados referente a uma empresas.
   */
  handleSubmit = async () => {

    var empresa = {
      cnpj: this.refs.cnpj.value,
      razaoSocial: this.refs.razaoSocial.value,
      nomeResponsavel: this.refs.nomeResponsavel.value,
      cpf: this.refs.cpf.value,
      enderecoEmpresa: this.refs.endereco.value,
      bairro: this.refs.bairro.value,
      cep: this.refs.cep.value,
      cidade: this.refs.cidade.value,
      estado: this.refs.estado.value,
      complemento: this.refs.complemento.value
    }

    const response = await api.put(`/cadastros/${this.state.id}`, {empresa})
        .then(res => {
          alert("Atualizado com sucesso!")
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          alert("Houve algum erro nesta atualização!")
          console.log(error);
         });
                      

    window.location.href="/cadastros"; 
    
  }

  /**
  * Função que renderiza o HTML que exibe o formulário de atualização de uma empresa.
  */
 render() {
  return (
    <div className="cadastro-list">
    
      <article>
        <p>CNPJ: <input type="text" ref="cnpj" defaultValue={this.state.empresa.cnpj} /></p>
        <p>Razão Social: <input type="text" ref="razaoSocial" defaultValue={this.state.empresa.razaoSocial} /></p>
        <p>Nome Responsável: <input type="text" ref="nomeResponsavel" defaultValue={this.state.empresa.nomeResponsavel} /></p>
        <p>CPF Responsável: <input type="text" ref="cpf" defaultValue={this.state.empresa.cpf} /></p>
        <p>Endereço: <input type="text" ref="endereco" defaultValue={this.state.empresa.enderecoEmpresa} /></p>
        <p>Bairro: <input type="text" ref="bairro" defaultValue={this.state.empresa.bairro} /></p>
        <p>CEP: <input type="text" ref="cep" defaultValue={this.state.empresa.cep} /></p>
        <p>Cidade: <input type="text" ref="cidade" defaultValue={this.state.empresa.cidade} /></p>
        <p>Estado: <input type="text" ref="estado" defaultValue={this.state.empresa.estado} /></p>
        <p>Complemento: <input type="text" ref="complemento" defaultValue={this.state.empresa.complemento} /></p>
        <p><button onClick={this.handleSubmit}>Atualizar</button></p>
        <p><Link to={"/"}>Index</Link></p>
      </article>
    </div>
  );
}


}