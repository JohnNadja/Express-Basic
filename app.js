const express = require ('express')
const app = express()
const port = 3000 //localhost:3000

app.get('/', (req, res) => {
    res.send("Hola a todos mis explorers")
})

// path inicial, respondereá a la url localhost:3000}
app.listen(port, () =>{
    console.log("¡Server Listo!")
})


//Respondiendo a un texto
// localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchx')
})


// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) =>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

//Query Params: Recibir parámetors para la url
//https://localhost:3000/explorers/John
app.get('/explorers/:explorerName', (req, res) =>{
    res.send(req.params)
})