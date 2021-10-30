import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import usePackage from '../hooks/usePackage';
import useRegisteredTourist from '../hooks/useRegisteredTourist';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allPackage = usePackage();
    const allRegisteredTourist = useRegisteredTourist();
    return (
        <AuthContext.Provider value={{ allFirebase, allPackage, allRegisteredTourist }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;