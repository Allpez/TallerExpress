//El orden de las importaciones afecta la ejecucion del codigo
import express from "express"; // importamos express
import "dotenv/config.js" // Nos poermite acceder a las variables de entorno
import "./config/database.js" // Llamamos la conexion a la base de datos

const server = express() //creamos la variable server donde se ejecutara express

const PORT = process.env.PORT || 8080 //variable PORT donde se almacenara la ruta al servidor (variable de entorno)

const ready = ()=> console.log("server ready in port: " +PORT); //funcion parea retornar el estado a la terminal

// endpoint basico
server.get('/',(req,res) => {
    res.send('Hola mundo en express')
})

server.listen(PORT,ready) //utilizamos la propiedad listen para escuchar el puerto


console.log(process.env.PORT); //para ver las variables de entorno
 