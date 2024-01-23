import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <h1>páginas:</h1>
        <Link to='/'><p>home</p></Link>
        <Link to='/pai-filho'><p>paiFilho</p></Link>
        <Link to='/sobre/Renan'><p>sobre</p></Link>
        <Link to='/state'><p>state</p></Link>
        <Link to='/lista'><p>lista</p></Link>
        <Link to='/autoLista'><p>autoLista</p></Link>
        <Link to='/condicional'><p>Condicional</p></Link>
        </div>        
    )
}

export default Footer; 