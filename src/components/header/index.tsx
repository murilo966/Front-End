import { Link } from 'react-router-dom'

type Prop = {
    PgAtual?:String
}

function Header(param:Prop){
    return(
        <div className="header">
            <div className="container-menu">

                <div className="profile">
                    <Link to='/'>
                        <img src="/image/user.jpg"/>
                    </Link>
                </div>


                    <div>
                        <p>Você está na página: {param.PgAtual}</p>
                    </div> 


                <div className="login">
                    <label> <a href="#">Login</a> </label>
                </div>
            </div>
        </div>

    )
}

export default Header;