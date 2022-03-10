import {useState} from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {

  const [busqueda, setBusqueda] = useState('')

  
  return (

    <div className="container">
        <h1>App Rick and Morty</h1>
        <Formulario setBusqueda={setBusqueda}/>
        <button
            className="btn btn-danger mt-2"
            onClick={()=>setBusqueda('')}
        >          
            Reiniciar
        </button>
        <PintarDatos busqueda={busqueda}/>
    </div>
  )
}

export default App