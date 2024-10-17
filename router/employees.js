import { response,Router } from "express";
import { allEmployees,employeeByName,employeeFullTime,employeeDepartment } from "../controllers/employees/read.js";
import { create,insertMany } from "../controllers/employees/create.js";

const router = Router() //Para usar el router lo guardamos en una constante 

router.get('/all',allEmployees) //Creamos un enrutador y le dimos la parte final de la ruta
router.get('/name/:name',employeeByName) //Creamos otro enrutador para filtrar por nombre del empleado
router.get('/isFullTime/:fullTime',employeeFullTime) //Creamos otro enrutador para filtrar fulltime
router.get('/department/:department',employeeDepartment) //Creamos otro enrutador para filtrar por departamento
router.post('/create',create)
router.post('/insertMany',insertMany)

    
export default router