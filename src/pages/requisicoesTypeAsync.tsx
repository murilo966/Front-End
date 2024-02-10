import { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Produto } from "../Types/produtos"

function RequisicoesAsync(){

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const[loading, setLoading] = useState(false)
    const [categorias, setCategorias] = useState([])


    const carregarProdutos = async () => {
        setLoading(true)
        try{
            //aqui podemos escolher entre um ou vários produtos, basta adicionar /id (exemplo: 5)
            let response = await fetch("https://fakestoreapi.com/products")
            let Json = await response.json();
            
            const dataArray = Array.isArray(Json) ? Json: [Json]
            setLoading(false);
            setProdutos(dataArray);
        }catch(e){
            setLoading(false)
            alert('Falha ao carregar os produtos, tente novamente')
        }

    }    

    const mostrarCategorias = async () => {
        setLoading(true)
        try{
            let response = await fetch("https://fakestoreapi.com/products/categories")
            let Json = await response.json();

            const dataArray2 =  Json
            setLoading(false);
            setCategorias(dataArray2);

        } catch (e){
            setLoading(false)
            alert('Falha ao carregar os produtos, tente novamente')
        }
    }

    return(
        <div className="darkModeRequisicoes">
            <Header PgAtual={"RequisicoesAsync"}/>
                <div className="content">

                    <div className="containerRequisicoes">

                        {loading &&
                            <div>
                                Carregando conteúdo......

                                <hr />
                            </div>     
                                                   
                        }

                        {!loading &&
                            <div>
                                <button onClick={carregarProdutos}>Carregar os produtos</button>
                                {produtos.map((item,index)=>(
                                    <tr key={index}>
                                        <hr />
                                        <table className="Produto">
                                            <th>{item.title}</th> 
                                            <tr>
                                                <div className="ImagemProduto">
                                                    <img src={item.image}
                                                    width="20%" height="20%"/>
                                                </div>
                                            </tr> 
                                            <tr>{item.description}</tr>
                                            <tr>U$ {item.price}</tr>
                                            <tr><button>COMPRAR</button></tr>
                                        </table>
                                        <hr />
                                    </tr>
                                ))}

                                <hr />
                                <br />


                                <button onClick={mostrarCategorias}> Carregar categorias </button>

                                    {categorias.map((itemC,index)=>(
                                        <tr key={index}>                               
                                            <td> {itemC}</td>                                
                                        </tr>
                                    ))}
                                <hr />
                            </div>
                        }

                    </div>

                </div>
            <Footer/>
        </div>
    )
}

export default RequisicoesAsync

function setLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}
