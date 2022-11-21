import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProviderToken = (props) => {

    const [userSessionInfo , setUserSessionInfo] = useState ({
        token:localStorage.getItem("token"),
        name:localStorage.getItem("name")
    })
    console.log("sessioninfo", userSessionInfo)
   
    const [logInObj, setLogInObj] = useState ({
        email: "",
	    password: ""
    })

    return (
        <AuthContext.Provider value = {{ userSessionInfo , setUserSessionInfo,logInObj, setLogInObj}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);
