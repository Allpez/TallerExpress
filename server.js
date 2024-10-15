import express from "express"; // importamos express
import "dotenv/config.js" // Nos poermite acceder a las variables de entorno

const server = express()

const PORT = process.env.PORT || 8080

const ready = ()=> console.log("server ready in port: " +PORT);

// endpoint basico
server.get('/',(req,res) => {
    res.send('Hola mundo en express')
})

server.listen(PORT,ready)


console.log(process.env.PORT);
 