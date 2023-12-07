import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="darkMode">
            <Header PgAtual={"Home"}/>
            <div className="content">
                <div className='container'>
                    <p>Essa é a página Home</p>
                    <p>No momento não temos nenhum conteúdo nessa página!</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;