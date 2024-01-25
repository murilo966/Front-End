import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"

function Requisicoes(){

    const [produtos, setProdutos] = useState([])

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
        <div className="darkMode">
            <Header PgAtual={"Requisicoes"}/>
                <div className="content">

                    <div className="container">


                        <hr />
                        <button onClick={carregarProdutos}>Carregar os produtos</button>
                        

                        
                        {produtos.map((item,index)=>(
                            <tr key={index}>
                                <hr />
                                <td><p>Total de produtos: {produtos.length}</p> {item[1]}</td>
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