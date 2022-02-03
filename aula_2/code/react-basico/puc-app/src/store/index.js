import { createStore } from 'redux';

// Login Reducer Function

const loginReducer = (state = { isLoggedIn: true }, action) => {
    // Login
    if (action.type === 'login') {
        // API Call, DB Call para verificação de username && password.
        return { isLoggedIn: true }
    }
    // Logout
    if (action.type === 'logout') {
        return { isLoggedIn: false }
    }
    return state;
};


// Central Data Store
const store = createStore(loginReducer);

export default store;