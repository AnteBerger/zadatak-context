import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

const ContextConsumer = () => {
  const {text, number } = useContext(AuthContext)
  return (
    <>
    <p>Tekst: {text}</p>
    <p>Broj: {number}</p>
    </>
  )
}

export default ContextConsumer