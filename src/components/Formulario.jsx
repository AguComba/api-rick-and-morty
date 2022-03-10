import React from 'react'
import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'

const Formulario = ({setBusqueda}) => {

  const [inputs, handleChange, reset] = useFormulario({
      nombre:''
  })

  const {nombre} = inputs

  const handleSubmit = e =>{
      e.preventDefault()
      if(!nombre.trim()){
          return Swal.fire({
              title: 'Error!',
              text: 'No se puede buscar un campo vacio',
              icon: "error"
          })
      }  
      setBusqueda(nombre.trim().toLowerCase())
      reset()
  }
  return (
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Ingrese personaje'
          className='form-control mb-2'
          value={nombre}
          onChange={handleChange}
          name="nombre"
        />
        <button className="btn-dark btn" type='submit'>Buscar</button>
      </form>
  )
}

export default Formulario