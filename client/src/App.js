import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import ShoppingList from "./components/ShoppingList"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactButton from 'react-bootstrap/Button';
import ShoppingListFunc from './components/ShoppingListFunc';

const App = () => {
  const [mount, setMount] = useState(true)
  return <div>
  <Saludo nombre="Mauro" saludo="Hola cómo estás"/>
  <Saludo nombre="Javier" />
  <Saludo nombre="Kimberly" />
  {mount ? 
  <ShoppingList /> : <ShoppingListFunc /> }
  <ReactButton onClick={() => setMount(!mount)}>Hola</ReactButton>
</div>
}

    

export default App;
