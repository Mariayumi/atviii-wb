import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import ListaProdServ from "./listaProdServ";
import VisualizarCliente from "./visualizarCliente";
export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produtos']} />
                    <ListaClientes tema="purple lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastros', 'Produtos']} />
                    <VisualizarCliente tema="#9575cd deep-purple lighten-2" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}