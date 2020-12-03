const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get("/", (request, response) => {    
    response.status(200).send("Hola" + request.query.hola);
});

app.get("/ejs", (request, response) => {  
    const saludo = request.query.saludo;
    if (saludo != null) {
        response.status(200).render("saludo_post", {saludo, personalizado: request.query.personalizado, repeat: 1});
    }  else {
        response.status(200).render("saludo");
    }
});

app.post("/ejs", (request, response) => {   
    const repeat = request.query.repeat; 
    response.status(200).render("saludo_post", {...request.body, repeat});
});


app.get("/mauro/:saludo", (request, response) => {    
    response.status(200).send(request.params.saludo + " "+ request.query.hola);
});

app.post("/api", (request, response) => {
    console.log(request.body);
    response.status(200).json({ status: "Enviado" });
});


app.listen(8080,()=> {
    console.log("Servidor escuchando");
});
