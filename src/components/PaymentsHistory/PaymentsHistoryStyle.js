import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.div`
    width:326px;
    height:31px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:25px;
    margin-bottom:22px;

        h1{
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;            
            color: #FFFFFF;
            font-family: 'Raleway';

        }
        img{
            width:23px;
            height:24px;
        }
`
export const EmptyResgiterContainer = styled.div`
    height:446px;
    background: #FFFFFF;
    border-radius: 5px;
    width:326px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:13px;

        h1{
            width:180px;
            flex-wrap:wrap;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
            font-family: 'Raleway';

        }
    `
    export const AddRegisterContainer = styled.div`
    width:326px;
    height:114px;
    display:flex;
    justify-content:space-between;
    
        
        div{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            border-radius:5px;
            background: #A328D6;
            width:155px;
        }

        h1{
            flex-wrap:wrap;
            width:64px;
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;            
            color: #FFFFFF;
            font-family: 'Raleway';
            padding:10px;
        }
        img{
            width:23.56px;
            padding:10px;
        }
    `
    export const StyledLink = styled(Link)`
    text-decoration:none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration:none;
    }
`