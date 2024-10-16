import { response,Router } from "express";
import { allEmployees,employeeByName,employeeFullTime } from "../controllers/employees/read.js";

const router = Router() //Para usar el router lo guardamos en una constante 

router.get('/all',allEmployees) //Creamos un enrutador y le dimos la parte final de la ruta
router.get('/name/:name',employeeByName) //Creamos otro enrutador para filtrar por direccion
router.get('/isFullTime/:fullTime',employeeFullTime) //Creamos otro enrutador para filtrar por nombre

    
export default router