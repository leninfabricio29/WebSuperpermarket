import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Formulario() {
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [precio, setPrecio] = useState('')
    const [cantidad, setCantidad] = useState('')


    const registrar = async (e) => {
        e.preventDefault()
        const NuevoProducto = {nombre,categoria,precio,cantidad}
        const respuesta = await Axios.post('http://localhost:4000/api', NuevoProducto)
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: true,
            timer: 2500
        })
    }

    return (
        <div className="container col-md-3 mt-5">
            <div>
                <h5>Registro de productos</h5>
            </div>
            <form onSubmit={registrar} >
                <div className="form-group ">
                    <input type="text" className="form-control" required placeholder="Ingrese el nombre" onChange=
                        {e => setNombre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Ingrese la categoria" onChange=
                        {e => setCategoria(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Ingrese el precio" onChange=
                        {e => setPrecio(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" required placeholder="Ingrese la cantidad" onChange=
                        {e => setCantidad(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" > Agregar </button>
            </form>
        </div>
    )

}
