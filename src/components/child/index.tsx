type Props = {
    OnClickButtonFN: (retorno: string) => void
    OnClickButtonSave: () => void
}

function Filho( Parametros: Props){

    function HandleClickButtonFN(){
        Parametros.OnClickButtonFN('LUKE SKYWALKER DIZ - NÃÃÃÃÃÃÃÃÃÃÃÃÃOOOOOOOOO !!!! ')
    }

    return(
        <div className="container-star-wars">
            <div className="bt-darth-vader">
                <button onClick={(HandleClickButtonFN)}>DARTH VADER DIZ </button> 
            </div>

            <div className="bt-luke-skywalker">
                <button onClick={(Parametros.OnClickButtonSave)}>LUKE DIZ !!!!</button> 
            </div>            
        </div>
    )
}

export default Filho;