import Employee from "../../models/Employee.js"

let allEmployees = async (req,res) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let employeeByName = async (req,res) => {
    try {
        let nameQuery = req.params.name
        let all = await Employee.find({name: nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

let employeeFullTime = async (req,res) => {
    try {
        let fullTimeQuery = req.params.fullTime
        let all = await Employee.find({isFullTime: fullTimeQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    } 
}

export { allEmployees,employeeByName,employeeFullTime }