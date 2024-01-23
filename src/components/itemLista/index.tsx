type Props ={
    dados: {
        nome: string
        idade: string
    }
}

function ItemLista({dados}: Props){
    return(
        <div className="compUnicoProp">
            <td>Nome: {dados.nome}</td> <td>=-=</td> <td>Idade: {dados.idade}</td>
        </div>
    )
}

export default ItemLista