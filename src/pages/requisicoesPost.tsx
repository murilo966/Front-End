import React, { useEffect, useState } from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import { Produto } from "../Types/produtos";
import { Usuarios } from "../Types/usuarios";

function RequisicoesPost(){
    
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const[addTitleText, setAddTitleText] = useState('')
    const[addBodyText, setAddBodyText] = useState('')
    const[usuarios, setUsuarios] = useState <Usuarios[]>([])

    function handleInputTitulo(e: React.ChangeEvent<HTMLInputElement>){
        setAddTitleText(e.target.value)
    }

    function handleInputBody(e: React.ChangeEvent<HTMLTextAreaElement>){
        setAddBodyText(e.target.value)
    }
    



    const carregarUsuarios = async () => {
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/todos/5")
            let Json = await response.json();
            
            const dataArray = Array.isArray(Json) ? Json: [Json]
            setProdutos(dataArray);
        }catch(e){
            alert('Falha ao carregar os produtos, tente novamente')
        }

    }    

    useEffect(() => {
        carregarUsuarios()
    }, [])

    const handleAddClick = async () => {
        if (addTitleText && addBodyText) {
 
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
                                        {
                                            method: 'POST',
                                            body: JSON.stringify
                                            ({
                                                title: addTitleText,
                                                body: addBodyText,
                                                userID: 1
                                            }),
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }                                        
                                        }
                                      );                          
            let json = await response.json();
            console.log(json);

            if (json.id){
                alert('Post Adicionado com sucesso!')     
                setUsuarios((usuarios) => [...usuarios, json] );
 
            } else {
                alert('Ocorreu alguma falha.')
            }
 
        } else {
            alert('Preencha as informações.');
        }
 
    }

    return(
        <div className="darkMode">
            <Header PgAtual={"requisicoesPost"}/>
                <div className="content">
                    <div className="container">

                        <h1>Insira um título para esse conteúdo:</h1>
                        <input 
                            type="text" 
                            onChange={handleInputTitulo}>

                            </input>


                        <textarea 
                            className="txtArea" 
                            onChange={handleInputBody}>

                            </textarea>
                        <button onClick={handleAddClick}>Adicionar</button>


                        <hr />
                        <h2>Conteúdo será exibido aqui:</h2>
                        {usuarios.map((item,index)=>(
                            <tr key={index}>
                                <hr />


                                <table>
                                    <th>Item ID: {item.userID}</th> 
                                    <tr>Titulo: {item.title}</tr>
                                    <tr>Descrição: {item.body}</tr>
                                </table>

                                <hr />
                            </tr>
                        ))}

                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default RequisicoesPost