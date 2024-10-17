//Enrutador principal

import { Router } from "express";
import storesRouter from "./stores.js"
import productsRouter from "./products.js"
import employeesRouter from "./employees.js"

const router = Router() //enrutador principal, no le interesa el tipo de peticion

router.use('/stores',storesRouter) //cuando alguien solicite alguna ruta vaya a esa ruta
router.use('/products',productsRouter)
router.use('/employees',employeesRouter)

export default router