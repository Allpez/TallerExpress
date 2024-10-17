import Product from "../../models/Product.js"

let allProducts = async (req,res) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let productsByName = async (req,res) => {
    try {
        let nameQuery = req.params.name
        let all = await Product.find({name: nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let productsBytype = async (req,res) => {
    try {
        let typeQuery = req.params.type
        let all = await Product.find({type: typeQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let productsAvailable = async (req,res) => {
    try {
        let IsAvailable = req.params.available
        let all = await Product.find({available: IsAvailable})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}



export { allProducts,productsByName,productsBytype,productsAvailable }