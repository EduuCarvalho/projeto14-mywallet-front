import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "../../Style/GlobalStyle.js";
import styled from "styled-components";
import LoginPage from "../Login/LoginPage.js"


export default function App() {


    return (
        <BrowserRouter>
        <GlobalStyle/>
        <Pages>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>

        </Pages>
        </BrowserRouter>
    )
}

const Pages = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:purple;
    width:100vw;
    height:100vw;
`