import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col"

const Saludo = (props) => {
    const alertas = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} {idx} alert—check it out!
        </Alert>
      ))
return <Container> 
        <Row>
            <Col>
            <h1>Hola {props.nombre}</h1>
            </Col>
            <Col>
            {alertas}
            </Col>
        </Row>
    </Container>
}
export default Saludo;