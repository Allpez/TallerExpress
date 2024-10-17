import Employee from "../../models/Employee.js" 

let create = async (req,res) =>{
    try {
        let employee = req.body
        let newEmployee = await Employee.create(employee)
        return res.status(201).json({
            response: newEmployee
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let insertMany = async (req,res) =>{
    try {
        let employees = req.body
        let newEmployees = await Employee.insertMany(employees)
        return res.status(201).json({
            response: newEmployees
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { create,insertMany }