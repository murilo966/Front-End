import Filho from "../child";

function buttonEventAction(txt: String){
    alert('EU SOU SEU PAI LUCK - ' + txt)
}

function buttonEventSave(){
    alert(' NÃÃÃÃÃÃÃÃÃÃÃÃÃOOOOOOOOO, NÃÃÃÃÃÃÃÃÃÃÃÃÃOOOOOOOOO !!!')
}

function Pai(){
    return(
        <div>
            <Filho OnClickButtonFN={buttonEventAction}
                OnClickButtonSave={buttonEventSave} />
        </div>
    )
}

export default Pai;