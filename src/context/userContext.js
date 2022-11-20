import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProviderToken = (props) => {

    const [userToken , setUserToken] = useState ({
        token:"",
    })

    const [logInObj, setLogInObj] = useState ({
        email: "",
	    password: ""
    })

    return (
        <AuthContext.Provider value = {{ userToken,setUserToken,logInObj, setLogInObj}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);
