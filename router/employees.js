import { response,Router } from "express";
import Employee from "../models/Employee.js"

const router = Router() //Para usar el router lo guardamos en una constante 

router.get('/all', //Creamos un enrutador y le dimos la parte final de la ruta
    async (req,res) => {
        try {
            let all = await Employee.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        } 
    }
)

export default router