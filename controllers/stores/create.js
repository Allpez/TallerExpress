// Carpeta para crear nueva informacion. Nueva tienda

import Store from "../../models/Store.js" //importamos el modelo de tienda

let create = async (req,res) =>{
    try {
        let store = req.body
        let newStore = await Store.create(store)
        return res.status(201).json({
            response: newStore
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let insertMany = async (req,res) =>{
    try {
        let stores = req.body
        let newStores = await Store.insertMany(stores)
        return res.status(201).json({
            response: newStores
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { create,insertMany }