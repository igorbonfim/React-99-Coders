import React, {useState} from 'react';

const AuthContext = React.createContext({});

function AuthProvider(props){
    const [logado, setLogado] = useState(false);

    return (
        <AuthContext.Provider value={{logado, setLogado}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}; 