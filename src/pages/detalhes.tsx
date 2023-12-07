import Footer from "../components/footer"
import Header from "../components/header"

type Prop = {
    dados: {
        name: string;
        age: string;
    }
}

function Detalhes({dados}:Prop){
    return(
        <div>
                <li>Nome: {dados.name} Idade: {dados.age}</li>
                <br />
        </div>
    )
}

export default Detalhes