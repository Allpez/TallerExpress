// carpeta con la conexion a la base de datos
import mongoose from "mongoose";

let url = process.env.URI_MONGO // La URL de la conexion a la base de datos MondoDB

console.log(url); //para ver la URL

//Dos formas de hacer la conexion a la base de datos

//Uno al estilo JavaScript
// mongoose.connect(url) //Llamamos utilizando mongoose a la propiedad connect
// .then(() => console.log("Data base connected")) //controlamos la respuesta si la conexion es exitosa
// .catch(error => console.log(error)) // Si la conexion falla

//Dos
async function conectionDataBase() {
    try { //usamos try catch para atrapar errores
        await mongoose.connect(url)
        console.log("Data base connected")
    } catch (error) {
        console.log(error)
    }
}

conectionDataBase()