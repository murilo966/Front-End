import React from "react";
import Filho from "../child";
import { useState } from "react";



function Pai(){
    const [Texto, setTexto] = useState('');

    function handleChangeText(event: React.ChangeEvent< HTMLInputElement >){
        setTexto(event.target.value);
    }
    
    function ExecutarMetodoPai(Texto:string) {
        alert("Texto retornado" + Texto)
    }
    
    return(
        <div>
            <input type="text" placeholder="digite o texto passado" onChange={handleChangeText}/>
            <Filho textoFilho={Texto} botaoComTexto={ExecutarMetodoPai}/>
        </div>
    )
}

export default Pai;