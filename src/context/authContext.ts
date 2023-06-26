import {createContext} from 'react';

type ContextType = {
    isAuth: boolean
    setIsAuth: (value: boolean) => void
}

export const AuthContext = createContext<ContextType>({} as ContextType)