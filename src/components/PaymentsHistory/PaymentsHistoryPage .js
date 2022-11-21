import { Header,EmptyResgiterContainer,AddRegisterContainer,StyledLink } from "./PaymentsHistoryStyle";
import logOutImg from "./img/Vector.png";
import valueInImg from "./img/addcircle.svg";
import ValueOutImg from "./img/removecircle.svg";
import { useAuth } from "../../context/userContext";



export default function PaymentsHistoryPage () {

    const {userSessionInfo} = useAuth();

    return(
        <>
        <Header>
            <h1>Olá, {userSessionInfo.name}</h1>
            <img src={logOutImg} alt="logOut"/>
        </Header>
        <EmptyResgiterContainer>
            <h1>Não há registros de entrada ou saída</h1>
        </EmptyResgiterContainer>
        <AddRegisterContainer>
            <StyledLink to={'/deposit'}><div>
                <img src={valueInImg} alt="addValue"/>
                <h1>Nova entrada</h1>
            </div></StyledLink>
           <StyledLink to={'/payment'}><div>
                <img src={ValueOutImg} alt="addValue"/>
                <h1>Nova saída</h1>
            </div></StyledLink> 
        </AddRegisterContainer>
        </>
    )
}