import { Header, EmptyResgiterContainer, AddRegisterContainer, StyledLink, TransactionsContainer,TransactionItem,Balance } from "./PaymentsHistoryStyle";
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
    const [transactionArray, setTransactionArray] = useState([]);
    const [result , setResult] = useState(0);
    console.log("array", transactionArray)

    function resultCalculate(list) {
        let total = 0;

        list.map((l)=> l.type==="deposit"? total+=parseFloat(l.value):total-=parseFloat(l.value));
        setResult(total)
    }

    useEffect(()=>{
            axios.get(`${BASE_URL}/transations`,auth)
            .then((res)=>{
            setTransactionArray(res.data);
            resultCalculate(res.data)
            console.log(res.data)})
            .catch((err)=>
            console.log(err.response.data))

    },[]) 
 
    return (
        <>
            <Header>
                <h1>Olá, {userSessionInfo.name}</h1>
              <StyledLink to={"/"}><img src={logOutImg} alt="logOut" /></StyledLink>
            </Header>
            {transactionArray.length === 0 ?
                <EmptyResgiterContainer>
                    <h1>Não há registros de entrada ou saída</h1>
                </EmptyResgiterContainer> :
                <TransactionsContainer >{transactionArray.map((t)=><TransactionItem type={t.type} key={t._id}>
                    <h2>{t.date.slice(0,5)}</h2>
                    <p>{t.description}</p>
                    <h1>{parseFloat(t.value).toFixed(2).replace(".",",")}</h1>
                </TransactionItem>)}
                <Balance result={result}>
                    <h1>SALDO</h1>
                    <p>{result.toFixed(2).replace(".",",")}</p>
                </Balance>
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