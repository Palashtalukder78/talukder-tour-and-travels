import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import usePackage from '../hooks/usePackage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allPackage = usePackage();
    return (
        <AuthContext.Provider value={{ allFirebase, allPackage }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;