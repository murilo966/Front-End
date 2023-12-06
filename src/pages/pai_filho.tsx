import Footer from "../components/footer";
import Header from "../components/header";
import Pai from "../components/father";

function PaiFilho(){
    return(
        <div className="darkMode">
            <Header PgAtual={"paiFilho"}/>
            <div className="content">
                <div className="container-pai-filho">
                    <Pai/>
                </div>                
            </div>
            <Footer/>
        </div>
    )
}

export default PaiFilho;