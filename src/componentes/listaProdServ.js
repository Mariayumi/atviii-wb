import "./cliente.css"

export default function ListaProdServ(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className='row'>
                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Produtos</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l6 estilo'>
                    <div className="box">
                        <h5>Serviços</h5>
                            <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Serviço</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                    <td><a class="waves-effect waves-light btn"><i className="fa-solid fa-glasses"></i></a></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                        <h5>Produtos e serviços mais consumidos</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                    <h5>Produtos e serviços mais consumidos</h5>
                    <h6>pelo público masculino</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='col s12 m12 l4 estilo'>
                    <div className="box">
                    <h5>Produtos e serviços mais consumidos</h5>
                    <h6>pelo público feminino</h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}