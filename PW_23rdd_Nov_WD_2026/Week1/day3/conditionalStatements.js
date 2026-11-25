//Conditional statements - Used to check the conditions and the ranges.111111111
// if, if_else, if elseif else

let age =19
if(age>=18){
    console.log("Eligible")
}

if(age>=18){
    console.log("Eligible")
}else{
    console.log("Not eligible");
}

let marks = 31
if (marks>80){
    console.log("Distinction");
}else if(marks>60){
    console.log("First Class");
}else if(marks>40){
    console.log("Second Class");    
}else if(marks>30){
    console.log("Third Class");    
}else{
    console.log("Failed");
}


//Switch - Used to compare multiple condition over common expression

function launchBrowser(browserType){
// let browserType = "opera"
switch(browserType){
case "edge":
    console.log("Launch edge browser");
    break
case "chrome":
    console.log("Launch chrome browser");
    break
case "firefox":
    console.log("Launch firefox browser");
    break
case "webkit":
    console.log("Launch webkit browser");
    break
default:
    console.log("Invalid browser");
    break
}
}

launchBrowser("firefox")