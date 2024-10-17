//Controladores para leer, parte final del endpoint que se encarga de hacer la funcion de la peticion. 
import Store from "../../models/Store.js"

let allStores = async (req,res) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let storesByName = async (req,res) => {
    try {
        let nameQuery = req.params.name
        let all = await Store.find({ name: { $regex: nameQuery, $options: 'i' } }); 
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let storesByAddress = async (req, res) => {
    try {
        let addressQuery = req.params.address;
        let all = await Store.find({ address: { $regex: addressQuery, $options: 'i' } }); 
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

let StoresById = async (req,res) => {
    try {
        let idQuery = req.params.id
        let all = await Store.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}


export {allStores,storesByName,storesByAddress,StoresById}