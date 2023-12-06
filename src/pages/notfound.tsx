import Footer from "../components/footer"
import Header from "../components/header"

function NotFound(){
    return(
        <div className="darkMode">
            <Header PgAtual={"notFound"}/>
            <div className="content" >
                <p>Página not Found, Erro 404 </p>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound