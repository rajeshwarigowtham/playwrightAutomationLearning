/*Scoping - Accessiblity or visibility of a variable in the code
Three level of scoping
1. Block scoped - Let and const are block scoped variables 
2.Functional scoped - var is function scoped
3.Global scoped - If the variable is not present inside block() eg., if{}, function{}
*/

var golbalVariable="Scoping"
function access(){
if (true){
    let ename = "Gowtham" // try with var and const and check
    var eage = 28
    console.log("Name inside the if block",ename);    
    console.log("Age inside the if block",eage);    
    console.log("Scoping inside the if block",golbalVariable);    

}
    console.log("Scoping inside the if block",golbalVariable); 
    console.log("Age inside the if block",eage);    
    // console.log("Name inside the if block",ename);    
}
    console.log("Scoping inside the if block",golbalVariable); 
    // console.log("Age inside the if block",eage);    

access()
console.log("At the end",golbalVariable); 