import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "../../Style/GlobalStyle.js";
import styled from "styled-components";
import LoginPage from "../Login/LoginPage.js"
import SignUpPage from  "../SignUpPage/SignUpPage.js"
import PaymentsHistoryPage  from "../PaymentsHistory/PaymentsHistoryPage .js";
import DepositPage from "../Deposit-Payments/DepositPage.js";
import PaymentPage from "../Deposit-Payments/PaymentPage.js";
import React from "react";
import { AuthProviderToken } from "../../context/userContext.js";


export default function App() {


    return (
        <BrowserRouter>
        <GlobalStyle/>
        <AuthProviderToken>
        <Pages>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/paymentshistory" element={<PaymentsHistoryPage />}/>
                <Route path="/deposit" element={<DepositPage/>}/>
                <Route path="/payment" element={<PaymentPage/>}/>

            </Routes>

        </Pages>
        </AuthProviderToken>
        </BrowserRouter>
    )
}

const Pages = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#8C21BE;
    width:100vw;
    min-height:870px;
`