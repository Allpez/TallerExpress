import { Router } from "express";
import User from "../models/User"

const Router = Router() //Para usar el router lo guardamos en una constante 

Router.get('/all',
    async (req,res) => {
        try {
            let all = await User.find()
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