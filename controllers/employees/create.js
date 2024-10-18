import Employee from "../../models/Employee.js" 

let create = async (req,res,next) =>{
    try {
        let employee = req.body
        let newEmployee = await Employee.create(employee)
        return res.status(201).json({
            response: newEmployee
        })
    } catch (error) {
        next(error)
    }
}

let insertMany = async (req,res,next) =>{
    try {
        let employees = req.body
        let newEmployees = await Employee.insertMany(employees)
        return res.status(201).json({
            response: newEmployees
        })
    } catch (error) {
        next(error)
    }
}

export { create,insertMany }