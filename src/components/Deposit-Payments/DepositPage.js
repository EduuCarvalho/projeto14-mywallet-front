import { TypeTittle } from "./DepositStyle";
import { PaymentContainer } from "./DepositStyle";
import undoImg from "./img/undo.svg";

export default function DepositPage() {

    return (
        <>
            <TypeTittle>
                <h1>Nova entrada</h1>
                <img src={undoImg} alt= "Return Page"/>
            </TypeTittle>
            <PaymentContainer>
                <input placeholder="Valor" type="text"></input>
                <input placeholder="Descrição" type="password"></input>
                <button>Salvar entrada</button>
            </PaymentContainer>
        </>
    )
}