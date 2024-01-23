import Footer from "../components/footer"
import Header from "../components/header"
import ItemLista from "../components/itemLista"

function AutoLista(){

    let listaPessoas = [
        {nome: 'joao', idade: '24'},
        {nome: 'jose', idade: '50'},
        {nome: 'deniele', idade: '19'},
        {nome: 'jaime', idade: '26'},
        {nome: 'noele', idade: '31'},
        {nome: 'maria', idade: '16'}
    ]

    return(
        <div className="darkMode">
            <Header PgAtual={"autoLista"}/>
                <div className="content">
                    <div className='container'> 



                        <h2 className="Título_autoLista">Página de listas automáticas:</h2>
                        <br /><br /><br /><br />


                        <table className="listaCadastro">
                            <th><h3>Lista de nome e idade:</h3></th>
                            
                            <tr>
                                <div className="elemento">
                                    {listaPessoas.map((item,index)=>(
                                        <tr key={index}>
                                            <td>Nome {item.nome}</td> <td>- idade {item.idade}</td>
                                        </tr>
                                    ))}
                                </div>
                            </tr>



                        </table>

                        <table className="listaCadastro">
                            <th><h3>Lista usando Prop/Componente</h3></th>
                            
                            <div className="elemento">
                                {listaPessoas.map((item,index)=>(
                                            <tr key={index}>
                                                <ItemLista dados={item}/>
                                                
                                            </tr>
                                        ))}
                            </div>
                        </table>

                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default AutoLista