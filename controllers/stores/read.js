//Controladores para leer, parte final del endpoint que se encarga de hacer la funcion de la peticion. 
import Store from "../../models/Store.js"
import mongoose from 'mongoose'

let allStores = async (req,res,next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storesByName = async (req,res,next) => {
    try {
        let nameQuery = req.params.name;
        if (!nameQuery) {
            return res.status(400).json({ message: 'Name query parameter is required' });
        }
        let all = await Store.find({ name: { $regex: nameQuery, $options: 'i' } });
        if (all.length === 0) {
            return res.status(404).json({ message: `Store not Found, (${nameQuery}) is not valid` });
        }
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error);
    }
};

let storesByAddress = async (req,res,next) => {
    try {
        let addressQuery = req.params.address;
        if (!addressQuery) {
            return res.status(400).json({ message: 'Address query parameter is required' });
        }
        let all = await Store.find({ address: { $regex: addressQuery, $options: 'i' } });
        if (all.length === 0) {
            return res.status(400).json({ message: `Address not Found, (${nameQuery}) is not valid` });
        }
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let StoresById = async (req,res,next) => {
    try {
        let idQuery = req.params.id;
        if (!idQuery) {
            return res.status(400).json({ message: 'Id query parameter is required' });
        }
        // Validar si el id es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(idQuery)) {
            return res.status(400).json({ message: 'Id not Found' });
        }
        let store = await Store.findById(idQuery);
        if (!store) {
            return res.status(400).json({ message: 'Id not Found' });
        }
        return res.status(200).json({
            response: store
        });
    } catch (error) {
        next(error);
    }
};

export { allStores, storesByName, storesByAddress, StoresById }