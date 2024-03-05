import Footer from "../components/footer"
import Header from "../components/header"

function Login(){
    return(
        <div className="darkMode">
            <Header PgAtual={"login"}/>
                <div className="content">
                    <div className="container">
                        <p>Página de Login
                                        
                        </p>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Login