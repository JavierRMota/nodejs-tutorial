const express = require("express");
const app = express();
app.get("/", (request, response) => {    
    response.status(200).send("Hola" + request.query.hola);
});

app.get("/mauro/:saludo", (request, response) => {    
    response.status(200).send(request.params.saludo + " "+ request.query.hola);
});
app.listen(8080,()=> {
    console.log("Servidor escuchando");
});
