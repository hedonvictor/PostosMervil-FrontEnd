import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { AuthService } from "../services/auth/AuthService";



interface IAuthCotextData {
    logout: () => void;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<string | void>
}

const AuthContext = createContext({} as IAuthCotextData);

interface IAuthProviderProps {
    children: React.ReactNode;
}

const LOCAL_STORAGE_KEY__ACCESS_TOKEN = 'APP_ACCESS_TOKEN';

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [accessToken, setAccessToken] = useState<string>();

    useEffect(() => {
        

        const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);

        if(accessToken) {
            setAccessToken(JSON.parse(accessToken));
        } else {
            setAccessToken(undefined);
        }
    }, [])

    const handleLogin = useCallback(async (username: string, password: string) => {
        const result = await AuthService.auth(username, password);
        if(result instanceof Error) {
            return result.message;
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN, JSON.stringify(result.token));
            setAccessToken(result.token);
        };
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY__ACCESS_TOKEN);
        setAccessToken(undefined);
    }, []);

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuthContext = () => useContext(AuthContext);