import Product from "../../models/Product.js" 

let create = async (req,res,next) =>{
    try {
        let product = req.body
        let newProduct = await Product.create(product)
        return res.status(201).json({
            response: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let insertMany = async (req,res,next) =>{
    try {
        let products = req.body
        let newProducts = await Product.insertMany(products)
        return res.status(201).json({
            response: newProducts
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { create,insertMany }