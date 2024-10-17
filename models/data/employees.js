import "dotenv/config.js" 
import "../../config/database.js" 
import Employee from "../Employee.js" 

let employees = [
    {
        name: "Juan Perez",
        position: "Manager",
        salary: 4500000,
        isFullTime: true,
        department: "Sales"
    },
    {
        name: "Maria Gonzalez",
        position: "Assistant",
        salary: 2500000,
        isFullTime: true,
        department: "HR"
    },
    {
        name: "Carlos Rodriguez",
        position: "Accountant",
        salary: 3000000,
        isFullTime: true,
        department: "Finance"
    },
    {
        name: "Sofia Ramirez",
        position: "Marketing Specialist",
        salary: 3500000,
        isFullTime: true,
        department: "Marketing"
    },
    {
        name: "Andres Torres",
        position: "Developer",
        salary: 4000000,
        isFullTime: true,
        department: "IT"
    },
    {
        name: "Laura Martinez",
        position: "Designer",
        salary: 3200000,
        isFullTime: true,
        department: "Design"
    },
    {
        name: "Diego Fernandez",
        position: "Sales Representative",
        salary: 2800000,
        isFullTime: false,
        department: "Sales"
    },
    {
        name: "Valentina Castro",
        position: "HR Specialist",
        salary: 3000000,
        isFullTime: true,
        department: "HR"
    },
    {
        name: "Javier Gomez",
        position: "Project Manager",
        salary: 4700000,
        isFullTime: true,
        department: "Operations"
    },
    {
        name: "Camila Lopez",
        position: "Customer Service",
        salary: 2300000,
        isFullTime: false,
        department: "Support"
    },
    {
        name: "Felipe Gonzalez",
        position: "Data Analyst",
        salary: 3600000,
        isFullTime: true,
        department: "Analytics"
    },
    {
        name: "Juliana Torres",
        position: "Content Writer",
        salary: 2900000,
        isFullTime: true,
        department: "Content"
    },
    {
        name: "Sebastian Martinez",
        position: "Web Developer",
        salary: 3800000,
        isFullTime: true,
        department: "IT"
    },
    {
        name: "Daniela Rojas",
        position: "Social Media Manager",
        salary: 3400000,
        isFullTime: true,
        department: "Marketing"
    },
    {
        name: "Nicolas Herrera",
        position: "Operations Coordinator",
        salary: 3100000,
        isFullTime: true,
        department: "Operations"
    },
    {
        name: "Lina Jimenez",
        position: "Administrative Assistant",
        salary: 2200000,
        isFullTime: false,
        department: "Administration"
    }
];

Employee.insertMany(employees)