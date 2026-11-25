// var, let and const

//Var - Allows both redeclaration or re-initialization and it can also be re-assigned
var course = "Playwright"
var course = "Playwright" // redeclaration or re-initialization [ a drawback]
course = "Selenium" //re-assigning
console.log(course); // Prints the lastest one

//let - Re-declaration is not possible but it can be re-assigned
let empSalary = 67898
console.log(empSalary); //Redeclaration
empSalary = 67898799900
console.log(empSalary); //Reassigned

//const - Fixed var cant able to change or update
const pan = "FGUHIJOKLS"
//const pan = "FGUHIJOKLS"
// pan = "FGUHIJOKLS" //TypeError 
console.log(pan);

