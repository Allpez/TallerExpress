# TallerExpress

- Para poder correr el proyecto debe ejecutar los siguientes comandos: 

npm install express
npm install --save-dev nodemon
npm install dotenv
npm install mongoose
npm i corps
npm i porgan


crear archivo .env y configurar
PORT = 8080
password = tu link de mongo y contraseña de tu base de datos

**********************************************************************************************************************

Dinamica del taller.

1.- Crear un servidor de Express, descargar y configurar todo lo necesario para poder cumplir con los siguientes puntos:

- Crear un modelo de Tienda con mínimo las siguientes propiedades:
Nombre: String
Dirección: String
Teléfono: Number

- Crear un modelo de Producto con mínimo las siguientes propiedades:
Nombre: String
Marca: String
Tipo: String
Precio: String

- Crear un modelo de Empleado con mínimo las siguientes propiedades:
Nombre: String
Cargo: String
Salario: Number

2.- Crear Scripts de data para cada uno de los modelos, Tienda mínimo 5, productos mínimo 100, Empleados mínimo 15

3.- Crear endpoints para cada modelos usando los enrutadores y controladores, minimos 3 enpoint por cada modelo
  Ejemplo: 
      Tienda - Ver todas las tiendas
      Tienda - Ver una tienda según su dirección
      Tienda - Ver una tienda según su nombre

Nota: Configurar correctamente los archivos y carpetas, seguir el orden visto en clase y poner nombres de variables y archivos coherentes, lo mismo en la ruta de consumo del endpoint

4.- Crear endpoints tipo post para los tres modelos
      Enpoint crear 1 y endpoint crear varios

5.- Crear middlewares de control de errores y aplicarlo a todo el servidor