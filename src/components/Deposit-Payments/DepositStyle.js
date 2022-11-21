import styled from "styled-components";
import { Link } from "react-router-dom";

export const TypeTittle = styled.div`
    width:326px;
    height:31px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:25px;
    margin-bottom:40px;

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

export const PaymentContainer = styled.div`
    width:326px;
    display:flex;
    flex-direction:column;
    align-items:center;


        input {
            width:326px;
            height:58px;
            background: #FFFFFF;
            border-radius: 5px;
            border: 1px solid #D5D5D5;
            font-family: 'Raleway';
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            font-style: normal;
            padding-left:16px;
            margin-bottom:13px;
        }
        button {
            margin-bottom:36px;
            width:346px;
            height:46px;
            display:flex;
            align-items:center;
            justify-content:center;
            background-color:#A328D6;
            border-radius: 5px;
            border:none;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            font-style: normal;
            font-family: 'Raleway';
        }
` 
export const StyledLink = styled(Link)`
text-decoration:none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration:none;
}
`