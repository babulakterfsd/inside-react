import React, { createContext } from 'react';
import useMyStates from '../Hooks/useMyStates';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const allContexts = useMyStates();
    return <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
