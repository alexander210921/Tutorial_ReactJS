import React from 'react'
import ReactDom from 'react-dom'
const RenderElement= ()=>{
    const Element =<h1>Hello React</h1>
    ReactDom.render(Element,document.getElementById('root'))
}
export default RenderElement;

