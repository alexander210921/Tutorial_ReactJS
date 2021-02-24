import React, { useState } from 'react'
const Elemento =()=>{
    //Declaamos el estado como un objeto
    let [video,setVideo] = useState({
        title: 'Titulo del video',
        likes:0
    })
    //En el evento click se realiza una copia de las propiedades de video y se sobre escribe los numero de likes
    const add =()=>{
        setVideo({
            ...video,
            likes:video.likes+1
        })
    }
    return(
        <>
        <h1>{video.title}</h1>
        <button onClick={add}>
            {video.likes}  
        </button>    
        </>
    )
}
export default Elemento;