import Footer from "../components/footer";
import Header from "../components/header";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="darkMode">
            <Header PgAtual={"Home"}/>
            <div className="content">
                <div className='container'>
                    <label>Home</label>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;