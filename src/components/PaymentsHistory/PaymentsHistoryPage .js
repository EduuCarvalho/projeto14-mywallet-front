import { Header,EmptyResgiterContainer,AddRegisterContainer } from "./PaymentsHistoryStyle";
import logOutImg from "./img/Vector.png";
import valueInImg from "./img/addcircle.svg";
import ValueOutImg from "./img/removecircle.svg";

export default function PaymentsHistoryPage () {
    return(
        <>
        <Header>
            <h1>Olá, Fulano</h1>
            <img src={logOutImg} alt="logOut"/>
        </Header>
        <EmptyResgiterContainer>
            <h1>Não há registros de entrada ou saída</h1>
        </EmptyResgiterContainer>
        <AddRegisterContainer>
            <div>
                <img src={valueInImg} alt="addValue"/>
                <h1>Nova entrada</h1>
            </div>
            <div>
                <img src={ValueOutImg} alt="addValue"/>
                <h1>Nova saída</h1>
            </div>
        </AddRegisterContainer>
        </>
    )
}