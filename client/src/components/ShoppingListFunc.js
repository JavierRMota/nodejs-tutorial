import { Input, Button } from "@material-ui/core"
import React, { useState, useEffect } from "react"

const ShoppingListFunc = (props) => {
    const [nombre, setNombre] = useState("Mauro")
    const [apellido, setApellido] = useState("Rodríguez")
    const onSubmit = (event) => {
        event.preventDefault()
        alert(`Enviado ${nombre} ${apellido}`)
    }

    useEffect(() => {
        console.log("RENDER FUNCIÓN")
    })

    useEffect(() => {
        // CONECTAR...
        console.log("Primera vez FUNCIÓN")
        return () => {
            // DESCONECTAS...
            console.log("BYE FUNCIÓN")
        }
    }, [])


    useEffect(() => {
        console.log("Se cambió el nombre")
    }, [nombre, apellido])

    console.log(nombre, "Función")

    return <div className="shopping-list">
    <h1>Shopping List for {props.name}</h1>
    <ul>
    <li>{nombre}</li>
      <li>{apellido}</li>
      <li>Oculus</li>
      <form onSubmit={onSubmit}>
        <Input
        onChange={(event) => setNombre(event.target.value)} 
        value={nombre}
        placeholder="Soy un input"
        > </Input>
        <Input
        onChange={(event) => setApellido(event.target.value)} 
        value={apellido}
        placeholder="Soy un input"
        > </Input>
        <Button type="submit" >Hola</Button>
    </form>

    </ul>
  </div>
}

export default ShoppingListFunc;
