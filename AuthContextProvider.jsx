import { createContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const text = "Ovo je rješenje Matejove vježbe iz Contexta"
  const number = 1


  return (
    <AuthContext.Provider value={{text, number}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider