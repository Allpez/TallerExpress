import Employee from "../../models/Employee.js"

let allEmployees = async (req,res) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let employeeByName = async (req,res,next) => {
    try {
        let nameQuery = req.params.name
        if (!nameQuery) {
            const error = new Error("Parameter 'name' is missing");
            error.status = 400;
            return next(error);
        }
        let employees = await Employee.find({ name: nameQuery })
        if (employees.length === 0) {
            const error = new Error(`No employee found with name: ${nameQuery}`);
            error.status = 404;
            return next(error);
        }
        return res.status(200).json({
            response: employees
        })
    } catch (error) {
        next(error)
    }
}

let employeeFullTime = async (req, res, next) => {
    try {
        let fullTimeQuery = req.params.fullTime;
        if (fullTimeQuery !== "true" && fullTimeQuery !== "false") {
            const error = new Error(`The value '${fullTimeQuery}' must be either 'true' or 'false'`);
            error.status = 400;
            return next(error);
        }
 
        let isFullTime = fullTimeQuery === "true";

        let employees = await Employee.find({ isFullTime: isFullTime });
        return res.status(200).json({
            response: employees
        });
    } catch (error) {
        next(error);
    }
};

let employeeDepartment = async (req,res,next) => {
    try {
        let departmentQuery = req.params.department
        if (!departmentQuery) {
            const error = new Error("Parameter 'department' is missing");
            error.status = 400;
            return next(error);
        }
        let employees = await Employee.find({ department: departmentQuery })
        if (employees.length === 0) {
            const error = new Error(`No employee found with name: ${departmentQuery}`);
            error.status = 404;
            return next(error);
        }
        return res.status(200).json({
            response: employees
        })
    } catch (error) {
        next(error)
    }
}

export { allEmployees, employeeByName, employeeFullTime, employeeDepartment }