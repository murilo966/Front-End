type Props = {
    botaoComTexto: (retorno: string) => void
    textoFilho: string
    
}

function Filho(Param: Props){

    function HandleClickButton1(){
        Param.botaoComTexto(`essa mensagem foi enviada pelo filho: ${Param.textoFilho}`)
    }

    return(
        <div className="container-star-wars">
            <div className="bt-darth-vader">
                <h1>{Param.textoFilho}</h1>
                <button onClick={HandleClickButton1}>Botão filho</button> 
            </div>       
        </div>
    )
}

export default Filho;