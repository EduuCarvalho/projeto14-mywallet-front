import { TypeTittle,PaymentContainer,StyledLink  } from "./DepositStyle";
import undoImg from "./img/undo.svg";

export default function PaymentPage() {

    return (
        <>
            <TypeTittle>
                <h1>Nova Saída</h1>
                <StyledLink to={'/paymentshistory'}><img src={undoImg} alt= "Return Page"/></StyledLink>
            </TypeTittle>
            <PaymentContainer>
                <input placeholder="Valor" type="text"></input>
                <input placeholder="Descrição" type="password"></input>
                <button>Salvar saída</button>
            </PaymentContainer>
        </>
    )
}