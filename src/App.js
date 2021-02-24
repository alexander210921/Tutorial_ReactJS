import React from 'react'
import ComponenteFuncional from './Components/ComponenteFuncional'
function App() {
  return (
   <>
   {/* Agregamos las props comosi fuesen atributos, (deben de ser con el mismo nombre con el que declaramos desde el componentes) */}
    <ComponenteFuncional titulo={'Titulo desde la prop'} precio ={12} />
    <ComponenteFuncional titulo={'Titulo desde la prop'} precio ={3} />

   </>
  );
}

export default App;
