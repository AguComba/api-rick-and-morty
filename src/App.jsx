import {useState} from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {

  const [busqueda, setBusqueda] = useState('')

  
  return (

    <div className="container">
        <h1>App Rick and Morty</h1>
        <Formulario setBusqueda={setBusqueda}/>
        <PintarDatos busqueda={busqueda}/>
    </div>
  )
}

export default App