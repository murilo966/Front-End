import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer">
            <h1>Páginas:</h1>
        <Link to='/'><p>Home</p></Link>
        <Link to='/pai-filho'><p>paiFilho</p></Link>
        <Link to='/sobre/:parametro'><p>sobre</p></Link>
        <Link to='state'><p>state</p></Link>
        </div>        
    )
}

export default Footer; 