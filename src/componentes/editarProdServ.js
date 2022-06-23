import "./formulario.css"

export default function EditarProdServ(props){
    const estiloBotao = `btn waves-effect waves-light #9575cd deep-purple lighten-2`
    return (
        <div className="container">
                <div className="row caixa">
                    <form className="col s12">
                        <div className="row">
                        <div className="input-field col s12">
                            <select className="browser-default input-field col s12 ">
                                <option value="" disabled selected>Escolha uma das opções</option>
                                <option value="1">Produto</option>
                                <option value="2">Serviço</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" defaultValue="Nome prod/serv"/>
                            <label htmlFor="first_name">Nome do produto/serviço</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="valor" type="number" className="validate" defaultValue="Valor"/>
                            <label htmlFor="valor">Valor</label>
                        </div>
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}