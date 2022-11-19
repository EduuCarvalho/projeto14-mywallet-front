import { TittleMyWallet, UserLoginInforContainer } from "./LoginStyle";

export default function LoginPage(){

    return(
        <>
            <TittleMyWallet>MyWallet</TittleMyWallet>
            <UserLoginInforContainer>
                <input placeholder = "E-mail" type="text"></input>
                <input placeholder = "Senha" type="password"></input>
                <button>Entrar</button>
                <h1>Primeira vez? Cadastre-se!</h1>
            </UserLoginInforContainer>
        </>
    )
}