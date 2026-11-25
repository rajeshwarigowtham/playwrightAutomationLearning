console.log("Javascript Basics"); //To print in terminal
// console.log("Welcome") CTRL+/ => Single line command

/* console.log("Javascript Basics") //To print in terminal
console.log("Welcome") */ //ALT+SHIFT+A

/*DataTypes - specify the types of data an var holds
types of DT 

1.Primitive DT : 
Build in/ Predefined Datatype
Once the value is assigned to the data types, it cannot be changes - Immutable 

string
number
boolean
undefined
null
bigint
symbol

2. Non Primitive DT:
User defined Datatypes - mutable - we can change the value

arrays
objects

Eg: let array [12,13,56]// stored in the form of index starts from 0
arr[2] = 65
*/

//var, let and const -> To declare the variable

//string - "", '', `` (backtick - above the tab key)
var empName = "Rajeshwari"
console.log(empName);
console.log(typeof empName); // To find the type of declared var

//number - all numbers like decimal and whole number
var phnNum = 487456789
//phnNum ="hi" // In run time the DT will be changed into string 
console.log(phnNum,typeof phnNum);

//boolean - It returns true or false
var isThisJSLearning = true
console.log(isThisJSLearning,typeof isThisJSLearning);

//undefined - variable is declared and value is not assigned, can be assigned at later stage.
var accountNumber 
console.log(accountNumber,typeof accountNumber);

//null - Intentionally we create as null
var landLine = null
console.log(landLine,typeof landLine); //DT will be object

//bigint - To print the exact long number add n at the end of the value so that the DT will change into bigin beyond 16 (beyond memory)
var transactionId = 1234567891234567 //exact value will be printed
var transactionId = 12345678912345673456789 //prints in expoential 
console.log(transactionId,typeof transactionId); //expoential number
var transactionId1 = 12345678912345678912345678n
console.log(transactionId1,typeof transactionId1); //bigint

//symbol - unique identification
var s1 = Symbol('id')
var s2 = Symbol('id')
console.log(s1===s2); //false
console.log(s1,typeof s1);
