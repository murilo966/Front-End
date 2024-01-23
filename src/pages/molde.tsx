import Footer from "../components/footer"
import Header from "../components/header"

function Molde(){
    return(
        <div className="darkMode">
            <Header PgAtual={"molde"}/>
                <div className="content">
                    <div className="container">
                        <p>Página de molde</p>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Molde