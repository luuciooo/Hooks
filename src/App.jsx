import { Route, Routes } from "react-router-dom"
import AppNav from "./components/AppNav"
import Counters from "./routes/Counters"
import Calculo from "./routes/Calculo"
import Fetchs from "./routes/Fetchs"
import Form from "./routes/Form"
import Tareas from "./routes/Tareas"
import Home from "./routes/Home"
import UserProvider from "./context/UserProvider"

const App = () => {
  return (
    <>
      <UserProvider>
        <AppNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/calculo" element={<Calculo />} />
          <Route path="/fetchs" element={<Fetchs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/tareas" element={<Tareas />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App

