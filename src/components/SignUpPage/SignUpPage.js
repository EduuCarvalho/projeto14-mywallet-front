import { TittleMyWallet } from "../Login/LoginStyle"
import { SingUpInforContainer, StyledLink } from "../SignUpPage/SignUpStyle.js"



export default function SignUpPage() {

   

    return (
        <>
            <TittleMyWallet>MyWallet</TittleMyWallet>
            <SingUpInforContainer>
                <input placeholder="Nome" type="text"></input>
                <input placeholder="E-mail" type="email"></input>
                <input placeholder="Senha" type="password"></input>
                <input placeholder="Confirme a senha" type="password"></input>
                <button>Cadastrar</button>
                <StyledLink to={'/'}><h1>Já tem uma conta? Entre agora!</h1></StyledLink >
            </SingUpInforContainer>
        </>
    )
}