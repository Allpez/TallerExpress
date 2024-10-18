// Carpeta para crear nueva informacion. Nueva tienda

import Store from "../../models/Store.js"; // Importamos el modelo de tienda

let create = async (req, res, next) => {
    try {
        let store = req.body;

        const Properties = ['name', 'address', 'phone', 'openOnWeekends', 'employees'];
        // Filtramos los campos que no están presentes o están vacíos
        const missingFields = Properties.filter(field => !store[field]);

        // Si hay algún campo faltante, devolvemos un error
        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }

        let newStore = await Store.create(store);
        return res.status(201).json({
            response: newStore,
        });
    } catch (error) {
        next(error);
    }
};

let insertMany = async (req, res, next) => {
    try {
        let stores = req.body;

        if (!Array.isArray(stores) || stores.length === 0) {
            return res.status(400).json({ error: "error" });
        }

        let newStores = await Store.insertMany(stores);
        return res.status(201).json({
            response: newStores,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
