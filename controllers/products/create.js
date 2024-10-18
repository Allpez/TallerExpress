import Product from "../../models/Product.js";

let create = async (req, res, next) => {
    try {
        let product = req.body;
        
        const Properties = ['name', 'brand', 'type', 'price', 'available'];
        const missingFields = Properties.filter(field => product[field] === undefined || product[field] === null);

        if (missingFields.length > 0) {
            return res.status(400).json({ 
                error: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        let newProduct = await Product.create(product);
        return res.status(201).json({
            response: newProduct,
        });
    } catch (error) {
        next(error);
    }
};

let insertMany = async (req, res, next) => {
    try {
        let products = req.body;

        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: "You must provide an array of products." });
        }

        const requiredFields = ['name', 'brand', 'type', 'price', 'available'];
        const invalidProducts = products.filter(product => 
            requiredFields.some(field => product[field] === undefined || product[field] === null)
        );
        
        if (invalidProducts.length > 0) {
            return res.status(400).json({
                error: `Some products are missing required fields.`,
                invalidProducts
            });
        }

        let newProducts = await Product.insertMany(products);
        return res.status(201).json({
            response: newProducts,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
