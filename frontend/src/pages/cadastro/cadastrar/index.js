import React, { Component } from "react";
import api from '../../../services/api';
import { Link } from "react-router-dom";

/**
 * Classe responsavel pelo módulo de cadastro de empresas
 */
export default class Formulario extends React.Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  /**
   * Função para envio dos dados do cadastro de empresa para a API cadastro.
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

    const response = await api.post('/cadastros', {empresa})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
         });
                      

    window.location.href="/cadastrar?"; 
    
  }
  /**
  * Função que renderiza o HTML que exibe o formulário de cadastro das empre.
  */
  render() {
  return (
    <div className="cadastro-list">
      <article>
        <p>CNPJ: <input placeholder="99.999.999/9999-99" type="text" ref="cnpj" /></p>
        <p>Razão Social: <input type="text" ref="razaoSocial" /></p>
        <p>Nome Responsável: <input type="text" ref="nomeResponsavel" /></p>
        <p>CPF Responsável: <input placeholder="999.999.999-99" type="text" ref="cpf" /></p>
        <p>Endereço: <input type="text" ref="endereco" /></p>
        <p>Bairro: <input type="text" ref="bairro" /></p>
        <p>CEP: <input placeholder="99.999-999" type="text" ref="cep" /></p>
        <p>Cidade: <input type="text" ref="cidade" /></p>
        <p>Estado: <input type="text" ref="estado" /></p>
        <p>Complemento: <input type="text" ref="complemento" /></p>
        <p><button onClick={this.handleSubmit}>Enviar</button></p>
        <p><Link to={"/"}>Index</Link></p>
      </article>
    </div>
  );
}


}