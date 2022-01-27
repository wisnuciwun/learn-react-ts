import { createContext, useState } from "react"

export type LoginUser = {
    name: string
    email: string
}

type LoginContextProps = {
    children: React.ReactNode
}

type LoginContextType = {
    login: LoginUser | null
    setLogin: React.Dispatch<React.SetStateAction<LoginUser | null>>
}

export const LoginContext = createContext({} as LoginContextType)

export const LoginContextProvider = ({ children }: LoginContextProps) => {
const [login, setLogin] = useState<LoginUser | null>(null);
    return (
    <LoginContext.Provider value={{login, setLogin}}> {/* es6 syntax */}
        {children}
    </LoginContext.Provider>
)
}