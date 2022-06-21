import { Component } from "react";
import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdServ from "./listaProdServ"
import FormularioCadastroProdServ from "./formularioCadastroProdServ"

function Routes() {
    return (
        <>
        <BarraNavegacao tema="#9575cd deep-purple lighten-2" botoes={[{nome:'Clientes', rota: "/"},{ nome: 'Produtos & Serviços', rota: "/prodserv"}, {nome: 'Cadastro de Clientes', rota:"/cadastrocliente"},{ nome: 'Cadastro de Produtos/Serviços', rota: "/cadastroprodserv"}]} seletorView={()=>{}} />
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<ListaCliente tema="purple lighten-4" />} />
                    <Route path="/prodserv" element={<ListaProdServ tema="purple lighten-4" />} />
                    <Route path="/cadastroprodserv" element={<FormularioCadastroProdServ tema="purple lighten-4" />} />
                    <Route path="/cadastrocliente" element={<FormularioCadastroCliente tema="purple lighten-4" />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;