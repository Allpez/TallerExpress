//Server es la aplicacion principal, es la que se ejecuta para levantar nuestra api

//El orden de las importaciones afecta la ejecucion del codigo
import express from "express"; // importamos express
import "dotenv/config.js" // Nos poermite acceder a las variables de entorno
import "./config/database.js" // Llamamos la conexion a la base de datos
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"


const server = express() //creamos la variable server donde se ejecutara express

const PORT = process.env.PORT || 8080 //variable PORT donde se almacenara la ruta al servidor (variable de entorno)

const ready = ()=> console.log("server ready in port: " +PORT); //funcion parea retornar el estado a la terminal

// endpoint basico de prueba 
server.get('/',(req,res) => {
    res.send('Hola mundo en express')
})

//Ruta no encontrada
// server.get('/*',(request, response) =>{
//     response.send('Page not found')
// })

//middleware importantes para express, se coloican sobre el listener antes de levantar el servidor para que sepa que middleware se le van a aplicar en base
server.use(express.json()) //las peticiones que va a recibir y responder seeran en formato JSON
server.use(express.urlencoded({ extended: true })) //Nos permite recibir parametros y querys complejas
server.use(cors()) //filtro para controlar las peticiones externas
server.use(morgan('dev'))// libreria que nos va a ayudar a controlar y ver las peticiones que lleguen al servidor

//Configuracion del enrutador
server.use('/api',indexRouter)

server.listen(PORT,ready) //utilizamos la propiedad listen para escuchar el puerto y levantar el servidor


console.log(process.env.PORT); //para ver las variables de entorno
 

