//Enrutador de tienda, se encrga de ver que hacer con la peticion

import Router from "express";
import { allStores,storesByName,storesByAddress } from "../controllers/stores/read.js";

const router = Router() //Para usar el router lo guardamos en una constante 

router.get('/all',allStores) //Creamos un enrutador y le dimos la parte final de la ruta
router.get('/name/:name',storesByName) //Creamos otro enrutador para filtrar por nombre
router.get('/address/:address',storesByAddress) //Creamos otro enrutador para filtrar por direccion

export default router