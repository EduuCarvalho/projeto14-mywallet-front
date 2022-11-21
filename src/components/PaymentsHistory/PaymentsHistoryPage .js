import { Header, EmptyResgiterContainer, AddRegisterContainer, StyledLink, TransactionsContainer } from "./PaymentsHistoryStyle";
import logOutImg from "./img/Vector.png";
import valueInImg from "./img/addcircle.svg";
import ValueOutImg from "./img/removecircle.svg";
import { useAuth } from "../../context/userContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";



export default function PaymentsHistoryPage() {

    const { userSessionInfo } = useAuth();

    const auth = {
        headers: { Authorization: `Bearer ${userSessionInfo.token}` }
    }
    const [transactionArray, setTransactionArray] = useState([{}]);
    console.log("array", transactionArray)

    useEffect(()=>{
            axios.get(`${BASE_URL}/transations`,auth)
            .then((res)=>
            console.log(res.data))
            .catch((err)=>
            console.log(err.response.data))

    },[])








    
 
    return (
        <>
            <Header>
                <h1>Olá, {userSessionInfo.name}</h1>
                <img src={logOutImg} alt="logOut" />
            </Header>
            {transactionArray.length === 0 ?
                <EmptyResgiterContainer>
                    <h1>Não há registros de entrada ou saída</h1>
                </EmptyResgiterContainer> :
                <TransactionsContainer>
                    <div>30/10</div>
                    <p>raçaão do dog</p>
                    <h1>30.42</h1>
                </TransactionsContainer>}
            <AddRegisterContainer>
                <StyledLink to={'/addtransaction/deposit'}><div>
                    <img src={valueInImg} alt="addValue" />
                    <h1>Nova entrada</h1>
                </div></StyledLink>
                <StyledLink to={'/addtransaction/payment'}><div>
                    <img src={ValueOutImg} alt="addValue" />
                    <h1>Nova saída</h1>
                </div></StyledLink>
            </AddRegisterContainer>
        </>
    )
            }