import React, { Component } from "react";
import apiBreweries from "../../services/apiBreweries";
import { Link } from "react-router-dom";

/**
 *   Classe responsável pelo módulo Breweries
 */
export default class Breweries extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }
    
    /**
     * Função para iniciar o método loadBreweries()
     */   
    componentDidMount(){
        this.loadBreweries();
    };

    /**
     *  Função para carregamento de todas as breweries da API externa no link: http....
     */
    loadBreweries = async (page=1) => {
        const response = await apiBreweries.get('/breweries');
        this.setState({ data: response.data });
    };

    /**
     * Função que renderiza o HTML de exibição das cervejarias cadastradas.
     */
    render(){   
          
        return (
                <div className="cadastro-list">
                 {
                    this.state.data.map(brewery => (
                        <article key={brewery._id}>
                        <p>Id: {brewery.id}</p>
                        <p>Breweries: {brewery.brewery_type}</p>
                        <p>Street: {brewery.street}</p>
                        <p>City: {brewery.city}</p>
                        <p>State: {brewery.state}</p>
                        <p>Postal Code: {brewery.postal_code}</p>
                        <p>Country: {brewery.country}</p>
                        <p>Longitude: {brewery.longitude}</p>
                        <p>Latitude: {brewery.latitude}</p>
                        <p>Phone: {brewery.phone}</p>
                        <p>Website Url: {brewery.website_url}</p>
                        <p>Update at: {brewery.updated_at}</p>
                        <p>Tag list: {brewery.tag_list}</p>                 
                    </article>
                ))}
                   <article>
                        <p><Link to={"/"}>Index</Link></p>
                    </article>
                 </div>
                                              
            )  
            
    }
  
}
