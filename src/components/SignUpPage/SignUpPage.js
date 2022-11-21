import axios from "axios";
import { useState } from "react"
import { TittleMyWallet } from "../Login/LoginStyle"
import { SingUpInforContainer, StyledLink } from "../SignUpPage/SignUpStyle.js"
import { BASE_URL } from "../../constants/url";
import { useNavigate} from "react-router-dom";



export default function SignUpPage() {

    let navigate = useNavigate();

    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });

    function signUpUser(e) {
        const { name, value } = e.target;
        setUserSignUp({ ...userSignUp, [name]: value })
        console.log(userSignUp)
    }

    function signUp(e) {
        e.preventDefault()
        axios.post(`${BASE_URL}/signup`,userSignUp)
        .then((res)=>{
            alert("Cadastro feito com sucesso!!!")
            console.log(res);
            navigate("/")})
    

        .catch((err)=>{
        alert(err.response.data)
        console.log(err)})
    }

    return (
        <>
            <TittleMyWallet>MyWallet</TittleMyWallet>
            <SingUpInforContainer onSubmit={signUp}>
                <input placeholder="Nome" type="text" name="name" value={userSignUp.name} onChange={signUpUser} required></input>
                <input placeholder="E-mail" type="email" name="email" value={userSignUp.email} onChange={signUpUser} required></input>
                <input placeholder="Senha" type="password" value={userSignUp.password} name="password" onChange={signUpUser} required></input>
                <input placeholder="Confirme a senha" type="password" name="passwordConfirmation" onChange={signUpUser} required></input>
                <button type="submit">Cadastrar</button>
                <StyledLink to={'/'}><h1>Já tem uma conta? Entre agora!</h1></StyledLink >
            </SingUpInforContainer>
        </>
    )
}