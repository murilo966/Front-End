import Footer from "../components/footer"
import Header from "../components/header"
import { useState } from "react";

function Condicional(){
    const [show, setShow] = useState(true);

    function HandleClickShow(){
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return(
        <div className="darkMode">
            <Header PgAtual={"Condicional"}/>
            <div className="content">
                    <div className="container">
                        <p>Página Condicional</p>

                        <button onClick={HandleClickShow}>{show? "Ocultar" : "Mostrar"}</button>

                        {show === true && 
                        <div>ESTE TETO SÓ SERA EXIBIDO SE O SHOW FOR = A TRUE</div>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Condicional