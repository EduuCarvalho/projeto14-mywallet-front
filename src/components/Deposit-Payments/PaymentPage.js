import { TypeTittle } from "./DepositStyle";
import { PaymentContainer } from "./DepositStyle";
import undoImg from "./img/undo.svg";

export default function PaymentPage() {

    return (
        <>
            <TypeTittle>
                <h1>Nova Saída</h1>
                <img src={undoImg} alt= "Return Page"/>
            </TypeTittle>
            <PaymentContainer>
                <input placeholder="Valor" type="text"></input>
                <input placeholder="Descrição" type="password"></input>
                <button>Salvar saída</button>
            </PaymentContainer>
        </>
    )
}