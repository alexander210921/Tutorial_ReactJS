import React, { useState } from 'react'
import './global.css'
//Componente hijo
const EventosPersonalizados =(props)=>{
    //El evento personalizado se recibe a traves de las props en el componente hijo
    
    return(
        <>
             <div className='box blue'>
                 <h2>Hijo</h2>
                 <button
                    onClick={props.onSaludar}
                 >
                    {props.mensaje}    
                 </button>
             </div>   
        </>
    )
}

//Este es el componente Padre que simboliza la funcion App
const App1 =()=>{
    const manejador =()=>{
        alert('test')
    }
    return(
        <>
        <div className ='box red'>
            <EventosPersonalizados 
                //Creando el evento personalizado
                onSaludar={manejador} mensaje={'Lanzar'}
            />
        </div>           
        </>
    )
    
}
export default App1;