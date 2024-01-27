import { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Produto } from "../Types/produtos"

function Requisicoes(){

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const carregarProdutos = () => {
        fetch("https://fakestoreapi.com/products")

        .then((response) => {
            return response.json();
        })

        .then((json) => {
            setProdutos(json);
        })
    }

    const [categorias, setCategorias] = useState([])

    const mostrarCategorias = () => {
        fetch("https://fakestoreapi.com/products/categories")

        .then((response) => {
            return response.json();
        })

        .then((json) => {
            setCategorias(json);
        })
    }

    return(
        <div className="darkModeRequisicoes">
            <Header PgAtual={"Requisicoes"}/>
                <div className="content">

                    <div className="containerRequisicoes">


                        <hr />
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
                        <br />
                        <br />
                        <br />

                        <hr />
                        <button onClick={mostrarCategorias}> Carregar categorias </button>
                        

                        {categorias.map((item,index)=>(
                            <tr key={index}>
                                <hr />
                                <td>Categoria {index + 1}: {item}</td>
                                <hr />
                            </tr>
                        ))}
                        <hr />

                    </div>

                </div>
            <Footer/>
        </div>
    )
}

export default Requisicoes