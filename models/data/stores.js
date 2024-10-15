import "dotenv/config.js" //importamos para que use variables de entorno para que reconozca el archivo .env donde esta guardada la URI
// al ser una dependencia dotenv no hay que hacer la ruta, se localiza automaticamente
import "../../config/database.js" //Para que el archivo stores se pueda conectar con la base de datos
import Store from "../Store.js" //Importamos el modelo


let stores = [
    {
        name: "Éxito",
        address: "Calle 170 # 67-51",
        phone: 6015930000,
        openOnWeekends: true,
        employees: 500
    },
    {
        name: "Jumbo",
        address: "Avenida Carrera 68 # 80-90",
        phone: 6014263480,
        openOnWeekends: true,
        employees: 200
    },
    {
        name: "Falabella",
        address: "Calle 138 # 55-51",
        phone: 6015873700,
        openOnWeekends: true,
        employees: 300
    },
    {
        name: "Panamericana",
        address: "Carrera 15 # 72-31",
        phone: 6013442300,
        openOnWeekends: true,
        employees: 100
    },
    {
        name: "Unilago",
        address: "Carrera 15 # 77-05",
        phone: 6013410700,
        openOnWeekends: true,
        employees: 50
    },
    {
        name: "Alkosto",
        address: "Avenida Calle 68 # 80-88",
        phone: 6014373030,
        openOnWeekends: true,
        employees: 400
    },
    {
        name: "Hipermercado Colsubsidio",
        address: "Calle 63 # 68-95",
        phone: 6013485468,
        openOnWeekends: true,
        employees: 250
    },
    {
        name: "Centro Comercial Santafé",
        address: "Autopista Norte # 183-50",
        phone: 6016585000,
        openOnWeekends: true,
        employees: 1000
    }
];

Store.insertMany(stores) //De mongoose, insertar todo