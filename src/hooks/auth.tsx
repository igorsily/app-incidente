import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import React, {
    createContext, ReactNode, useContext, useEffect, useState
} from 'react';
import { Api } from '../services/api';

type User = {
    name: string,
    email: string,
    token: string,
    profile: string,
    id_auth: string,
    photo: string
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: (document: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn(document: string, password: string) {

        try {
            const respose: AxiosResponse = await Api.post('user', {
                cpf_cnpj: document,
                password
            });

            const { data, status } = respose;
            if (status === 200) {

                await AsyncStorage.setItem("@atendimento:user", JSON.stringify(data));

                setUser(data);
            }

        } catch (error) {
            console.error(error);
        }

    }

    async function signOut() {
        setUser({} as User);
        await AsyncStorage.removeItem("@atendimento:user");
    }

    async function loadUserStorageData() { }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
};

