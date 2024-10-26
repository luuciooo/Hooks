import CalculoPesado from "./components/CalculoPesado"
import Callback from "./components/Callback"
import Counter from "./components/Counter"
import Fetch from "./components/Fetch"
import Formulario from "./components/Formulario"
import ListaDeTareas from "./components/ListaDeTareas"

const App = () => {
  return (
    <>
    <Counter/>
    <hr></hr>
    <Formulario />
    <hr></hr>
    <Fetch />
    <hr></hr>
    <CalculoPesado />
    <hr></hr>
    <Callback />
    <hr></hr>
    <ListaDeTareas />
    </>
  )
}

export default App

