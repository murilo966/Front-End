import {useParams} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';




function Sobre(){
    const params = useParams();

    return(
        <div className="darkMode">
            <Header PgAtual={"sobre"}/>

            <div className="content">
                Essa e uma página sobre o aluno: {params.parametro}
            </div>   

            <Footer/>        
        </div>
    )
}

export default Sobre;