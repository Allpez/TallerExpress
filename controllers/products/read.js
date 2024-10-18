import Product from "../../models/Product.js"

let allProducts = async (req,res,next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let productsByName = async (req,res,next) => {
    try {
        let nameQuery = req.params.name
        if (!nameQuery) {
            const error = new Error("Parameter 'Name' is missing");
            error.status = 400;
            return next(error);
        }
        let products = await Product.find({ name: nameQuery })
        if (products.length === 0) {
            const error = new Error(`No product found with name: ${nameQuery}`);
            error.status = 404;
            return next(error);
        }
        return res.status(200).json({
            response: products
        })
    } catch (error) {
        next(error)
    }
}
let productsBytype = async (req,res,next) => {
    try {
        let typeQuery = req.params.type
        if (!typeQuery) {
            const error = new Error("Parameter 'type' is missing");
            error.status = 400;
            return next(error);
        }
        let products = await Product.find({ type: typeQuery })
        if (products.length === 0) {
            const error = new Error(`No product found with Type: ${typeQuery}`);
            error.status = 404;
            return next(error);
        }
        return res.status(200).json({
            response: products
        })
    } catch (error) {
        next(error)
    }
}

let productsAvailable = async (req,res,next) => {
    try {
        let IsAvailable = req.params.available
        if (IsAvailable !== "true" && IsAvailable !== "false") {
            const error = new Error(`The value '${IsAvailable}' must be either 'true' or 'false'`);
            error.status = 400;
            return next(error);
        }

        let available = IsAvailable === "true";

        let all = await Product.find({ available: available })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allProducts, productsByName, productsBytype, productsAvailable }