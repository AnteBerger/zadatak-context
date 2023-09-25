import './App.css'

import AuthContextProvider from "./AuthContextProvider"
import Text from "./Text"
import Broj from "./Broj"
import ContextConsumer from "./ContextConsumer"

function App() {

  return (
    <AuthContextProvider>
      <h1>Zadatak</h1>
      <Text />
      <Broj />
      <ContextConsumer />
    </AuthContextProvider>
  )
}

export default App
