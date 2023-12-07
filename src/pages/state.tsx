import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function State() {
    const [somar, setCount] = useState(1);

    function handleClickMais() {
        setCount(somar + 1);
    }

    function handleClickMenos() {
        if(somar > 0)
            setCount(somar - 1);
    }

    return (
        <div className="darkMode">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="container-resultado">
                        <label>Contador:
                            <br />
                            <label id="resultado">{somar}</label> 
                        </label> 
                    </div>

                    <div className="bt-resultados">
                        <button id="bt-mais" onClick={handleClickMais}>Somar +1</button>
                        <button id="bt-menos" onClick={handleClickMenos}>Menos -1</button>
                    </div>                    
                </div> 
            </div>
            <Footer/>
        </div>

    );
}

export default State;

