import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { TypeTittle, StyledLink } from "./DepositStyle";
import { PaymentContainer } from "./DepositStyle";
import undoImg from "./img/undo.svg";
import { useAuth } from "../../context/userContext";

export default function AddTransactionsPage() {

    const { userSessionInfo } = useAuth();
    let navigate = useNavigate();

    const auth = {
        headers: { Authorization: `Bearer ${userSessionInfo.token}` }
    }
    console.log(auth)

    const { type } = useParams();
    const transactionType = type === "payment" ? "saída" : "entrada";
    const [form, setForm] = useState({
        description: "",
        value: "",
        type: type
    });


    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    console.log(auth)
    console.log(form)
    function postTransaction(e) {
        e.preventDefault();
        axios.post(`${BASE_URL}/addtransaction`, form, auth)
            .then(() => {
                navigate("/paymentshistory")
              
            })
            .catch((err) => console.log(err.response.data))
    }

    return (
        <>
            <TypeTittle>
                <h1>Nova {transactionType}</h1>
                <StyledLink to={'/paymentshistory'}> <img src={undoImg} alt="Return Page" /></StyledLink>
            </TypeTittle>
            <PaymentContainer onSubmit={postTransaction}>
                <input placeholder="Valor" type="number" value={form.value} name="value" onChange={handleForm} required></input>
                <input placeholder="Descrição" type="text" value={form.description} name="description" onChange={handleForm} required></input>
                <button type={"submit"} >Salvar {transactionType}</button>
            </PaymentContainer>
        </>
    )
}