import Footer from "../components/footer"
import Header from "../components/header"
import Detalhes from "./detalhes"

function Lista(){

    let lista =[
        "Jhonas",
        "Raul",
        "Guilherme",
        "Jenifer",
        "Vitoria"
    ]

    let listaObj =[
        {name: 'Murilo', age:'16'},
        {name: 'Gian', age:'15'},
        {name: 'Maria', age:'17'},
        {name: 'Gabriel', age:'16'}
    ]

    return(
        <div className="darkMode">
            <Header PgAtual={"Lista"}/>
            <div className="content">
                    <div className='container'>
                        <h2>Listas</h2>

                        <h3>Input de idades</h3>
                        <ul key="1" className="listaDesordenada">
                            {lista.map((item, index)=>(
                                <li key={index}>
                                    <br />
                                    <p>* Meu Index = {index}</p> {item}<input type="text" className="input_idade" placeholder="digite a respectiva idade"/>
                                </li>
                            ))}
                        </ul>
                        
                        <h3>Lista de usuários usando map</h3>
                        <ul className="listaDesordenada">
                            {listaObj.map((item, index)=>(
                                <li key={index}>
                                    <p>Nome: {item.name}</p>
                                    <p>Idade: {item.age}</p>
                                    <br /><br />
                                </li>
                            ))}
                        </ul>

                        <h3>Lista de usuários usando comonente</h3>
                        <ul key="3" className="listaDesordenada">
                            {listaObj.map((item, index)=>(
                                <Detalhes key={index} dados={item}/>))}
                        </ul>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Lista