//Function statement/Decleration
function demo(){                        //can call before initialise
    console.log("Function Statement");
}  
demo();                                     // Diffrence btw them is hoisting
//Function Expression
var b=function (){                      //Can't call befor initialise function due to hoisting
    console.log("Function Expression");
}
b();

// Function Anonymous
var c=function(){
    console.log("Anonymous");
}
  function sample(Parameter){
    console.log(`input is ${Parameter}`);
  }
  sample(argument);


  var FirstclassFunction=function xyz(params){
            return function inside(){console.log("inside")};
  }
FirstclassFunction(); //the ability of fxn to be used as value or argument or returned from an function