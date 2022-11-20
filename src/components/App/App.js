import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "../../Style/GlobalStyle.js";
import styled from "styled-components";
import LoginPage from "../Login/LoginPage.js"
import SignUpPage from  "../SignUpPage/SignUpPage.js"
import RegisterPage from "../Register/RegisterPage.js";


export default function App() {


    return (
        <BrowserRouter>
        <GlobalStyle/>
        <Pages>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>

        </Pages>
        </BrowserRouter>
    )
}

const Pages = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#8C21BE;
    width:100vw;
    height:100vw;
`