import { TittleMyWallet, UserLoginInforContainer } from "./LoginStyle";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export default function LoginPage(){

    const {setUserSessionInfo,logInObj, setLogInObj} = useAuth();

    let navigate = useNavigate();


   function handleLogIn(e){
    const {name,value} = e.target;
    setLogInObj({...logInObj,[name]:value})
    console.log("obejto login",logInObj);
   }

   function logIn(e){
    e.preventDefault()
    axios.post(`${BASE_URL}/signin`,logInObj)
        .then((res)=>{
           console.log("token e name",res.data)
           setUserSessionInfo(
                    {token:(res.data.token),
                        name:(res.data.name)
                    }
            )     
            navigate("/paymentshistory")   
        })
        .catch((err)=>{
        alert("E-mail e senha inválidos!!!")
        console.log(err)
        })
    }

    return(
        <>
            <TittleMyWallet>MyWallet</TittleMyWallet>
            <UserLoginInforContainer onSubmit={logIn}>
                <input placeholder = "E-mail" type="email" name="email" value={logInObj.email} onChange={handleLogIn} required ></input>
                <input placeholder = "Senha" type="password" name="password" value = {logInObj.password} onChange={handleLogIn} required></input>
                <button type="submit">Entrar</button>
                <h1>Primeira vez? Cadastre-se!</h1>
            </UserLoginInforContainer>
        </>
    )
}