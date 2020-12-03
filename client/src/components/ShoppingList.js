import { Input, Button } from "@material-ui/core"
import React from "react"

class ShoppingList extends React.Component {
    componentDidMount() {
        console.log("Primera vez")
    }
    componentDidUpdate() {
        console.log("RENDER")
    }
    componentWillUnmount() {
        console.log("Bye")
    }
    state = {
        nombre: "Mauro",
        apellido: "Rodríguez"
    }
    onSubmit (event) {
        event.preventDefault()
        alert(`Enviado ${this.state.nombre}`)
    }
    onInputChange (event) {
        this.setState({ nombre: event.target.value })
    }
  render() {
    console.log(this.state.nombre)
    const state = "No soy un estado de la clase"

    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
        <li>{this.state.nombre}</li>
          <li>{this.state.apellido}</li>
          <li>Oculus</li>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <Input
            onChange={(e) => this.onInputChange(e)} 
            value={this.state.nombre}
            placeholder="Soy un input"
            > </Input>
            <Button type="submit" >Hola</Button>
        </form>

        </ul>
      </div>
    );
  }
}
export default ShoppingList;
