import Employee from "../../models/Employee.js";

let create = async (req, res, next) => {
    try {
        let employee = req.body;

        const Properties = ['name', 'position', 'salary', 'startDate'];
        const missingFields = Properties.filter(field => !employee[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({ 
                error: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        let newEmployee = await Employee.create(employee);
        return res.status(201).json({
            response: newEmployee,
        });
    } catch (error) {
        next(error);
    }
};

let insertMany = async (req, res, next) => {
    try {
        let employees = req.body;

        if (!Array.isArray(employees) || employees.length === 0) {
            return res.status(400).json({ error: "You must provide an array of employees." });
        }

        const requiredFields = ['name', 'position', 'salary', 'startDate'];
        const invalidEmployees = employees.filter(employee => 
            requiredFields.some(field => !employee[field])
        );

        if (invalidEmployees.length > 0) {
            return res.status(400).json({
                error: `Some employees are missing required fields.`,
                invalidEmployees
            });
        }

        let newEmployees = await Employee.insertMany(employees);
        return res.status(201).json({
            response: newEmployees,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
