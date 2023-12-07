import Footer from "../components/footer"
import Header from "../components/header"

function Molde(){
    return(
        <div className="darkMode">
            <Header PgAtual={"página molde"}/>
                <p>Página de molde</p>
            <Footer/>
        </div>
    )
}

export default Molde