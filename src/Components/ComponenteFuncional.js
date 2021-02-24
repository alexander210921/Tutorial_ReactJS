import React from 'react'
//Las props llegan como primer parametro de la funcion
const TarjetaFruta =(props)=>{
    console.log(props)
    return(
        <>
            <div>
                {/* Agregamos la descripcion en medio de las etiqueta con el nombre de la prop que querramos */}
                <h3>{props.titulo}</h3>
                <p> Q {props.precio}</p>
             </div>   
        </>
    )
}
export default TarjetaFruta;