import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <h1>páginas:</h1>
            <Link to='/'><p>Home</p></Link>
            <Link to='/pai-filho'><p>PaiFilho</p></Link>
            <Link to='/sobre/Renan'><p>Sobre</p></Link>
            <Link to='/state'><p>State</p></Link>
            <Link to='/lista'><p>lista</p></Link>
            <Link to='/autoLista'><p>autoLista</p></Link>
            <Link to='/condicional'><p>Condicional</p></Link>
            <Link to='/requisicao'><p>Requisições</p></Link>
            <Link to='/requisicaoAsync'><p>RequisiçõesAssíncronas</p></Link>
            <Link to='/requisicoesPost'><p>RequisicoesPost</p></Link>

            <h2>Links auxiliares:</h2>
            <a href="https://reactstrap.github.io/?path=/story/home-installation--page"  target={"_blank"}>Reacstrap</a>
        </div>        
    )
}

export default Footer; 