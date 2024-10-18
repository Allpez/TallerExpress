import { Router } from "express";
import { allProducts,productsByName,productsBytype,productsAvailable } from "../controllers/products/read.js";
import { create,insertMany } from "../controllers/products/create.js";

const router = Router() //Para usar el router lo guardamos en una constante 

router.get('/all',allProducts) //Creamos un enrutador y le dimos la parte final de la ruta
router.get('/name/:name?',productsByName) //Creamos otro enrutador para filtrar por nombre del producto
router.get('/type/:type?',productsBytype) //Creamos otro enrutador para filtrar por tipo de producto
router.get('/available/:available',productsAvailable) //Creamos otro enrutador para filtrar por tipo de producto
router.post('/create',create)
router.post('/insertMany',insertMany)

export default router