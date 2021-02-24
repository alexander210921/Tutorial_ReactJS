import React, { useState } from 'react'
//Las props llegan como primer parametro de la funcion
const TarjetaFruta =(props)=>{
    //Los estados son valores que puen ir cambiando cuando lo requiramos y se va a renderizar
    //Si el estado cambia el componente deberia de cambiar con respecto a esto    
    let [cantidad,setCantidad]= useState(0);
    console.log(props)
    const handleClickAgregar =()=>{
        setCantidad(cantidad+1)
    }
    const hanldeClickQuitar=()=>{
        setCantidad(cantidad-1)    
    }
    const hanldeClickLimpiar=()=>{
        setCantidad(cantidad=0)    
    }
    return(
        <>
            <div>
                {/* Agregamos la descripcion en medio de las etiqueta con el nombre de la prop que querramos */}
                <h3>{props.titulo}</h3>
                <p>Precio: Q {props.precio}</p>
                <p>Cantidad:  {cantidad}</p>
                <button onClick={handleClickAgregar}>Agregar</button>
                <button onClick={hanldeClickQuitar}>Quitar</button>
                <button onClick={hanldeClickLimpiar}>Limpiar</button>



             </div>   
        </>
    )
}
export default TarjetaFruta;