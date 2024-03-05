import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { api } from "../api";
import Footer from "../components/footer"
import Header from "../components/header"
import { Produto } from "../Types/produtos";
import { Usuarios } from "../Types/usuarios";

function RequisicoesPostRefact(){
    
    const[loading, setLoading] = useState(false)

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const[addTitleText, setAddTitleText] = useState('')
    const[addBodyText, setAddBodyText] = useState('')
    const[usuarios, setUsuarios] = useState <Usuarios[]>([])


    const fileInput = useRef<HTMLInputElement>(null)
    const[legenda, setLegenda] = useState('')

    const HandleLegendaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLegenda(e.target.value)
    }

    const handleAddPost = async () => {
        if(fileInput.current?.files && fileInput.current.files.length > 0){
            const fileItem = fileInput.current.files[0];
            console.log(fileItem)
            const tiposPermitidos = ['image/png','image/jpg','image/gif','image/jpeg']

            if (tiposPermitidos.includes(fileItem.type)) {

                const data = new FormData();
                data.append('image', fileItem)
                data.append('legenda', legenda)

                    let json = await api.AdicionarcomArquivo(data);
                    if (json.id) {
                        alert('Post Adicionado com sucesso!')
                        setUsuarios((usuarios) => [...usuarios, json])
                    } else {
                        alert('falha ao adicionar o usuario')
                    }
                
            } 
            else {
                alert('Tipo do arquivo invalido')
            }
        } else {
            alert('arquivo inexistente')
        }
    }


    function handleInputTitulo(e: React.ChangeEvent<HTMLInputElement>){
        setAddTitleText(e.target.value)
    }

    function handleInputBody(e: React.ChangeEvent<HTMLTextAreaElement>){
        setAddBodyText(e.target.value)
    }

    
    



    const carregarUsuarios = async () => {
        setLoading(true)
        try{
            let Json = await api.CarregarUsuarios();
            
            const dataArray = Array.isArray(Json) ? Json: [Json];
            setProdutos(dataArray);
            setLoading(false);
        }catch(e){
            alert('Falha ao carregar os produtos, tente novamente');
            setLoading(false);
        }

    }    

    useEffect(() => {
        carregarUsuarios()
    }, [])

    const handleAddClick = async () => {
        if (addTitleText && addBodyText) {
            let json = await api.AdicionarUsuarios(addTitleText, addBodyText, 1)
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
            <Header PgAtual={"requisicoesPostRefact"}/>
            <div className="content">
                <div className="container">
                    
                    <h1>Insira um título para esse conteúdo:</h1>

                    {loading &&
                        <div>
                            <p>Carregando....</p>
                        </div>
                    }
                    
                    {!loading &&    
                        <div className="requisicaoAPI">
                            
                            <input type="text" onChange={handleInputTitulo}/>
                            <textarea className="txtArea" onChange={handleInputBody}/>
                            <button onClick={handleAddClick}>Adicionar</button>
                        </div>
                    }

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

                    <hr />
                    <input placeholder="SELECIONE A IMAGEM"
                    type="file"
                    ref={fileInput}
                    />
                    <br />
                    <input  placeholder="Informe uma descrição para sua imagem"
                    type="text" 
                    value={legenda}
                    onChange={HandleLegendaChange}
                    />
                    <br />
                    <button 
                    onClick={handleAddPost}
                    >Adicionar</button>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RequisicoesPostRefact