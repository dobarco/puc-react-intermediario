import React, { useState, useEffect } from 'react';

// const AuthContext = React.createContext();

const AuthContext = React.createContext({
    isLoggedin: false,
    onLogout: () => { },
    onLogin: (email, password) => {}
});


// Named export.
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }
    useEffect(() => {
        const storedUser = localStorage.getItem('isLoggedIn');

        if (storedUser === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}



export default AuthContext;
