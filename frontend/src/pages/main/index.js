import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

/**
 * Classe responsavel pela página inicial
 */
export default class Main extends React.Component {

   /**
  * Função que renderiza o HTML que exibe a página inicial.
  */
    render (){
        return (
            <div className="entradas">
                <article>
                    <p>Consultar Empresas Cadastradas<Link to={"/cadastros"}>Acessar</Link></p>
                    <p>Cadastrar Nova Empresa<Link to={"/cadastrar"}>Acessar</Link></p>
                    <p>Lista de Breweries<Link to={"/breweries"}>Acessar</Link></p>
                </article>

            </div>          

        );
    }
};
    

