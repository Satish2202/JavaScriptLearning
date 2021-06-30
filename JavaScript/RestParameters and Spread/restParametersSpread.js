/*
concepts that make the “passing of arbitrary parameters” to a function very easy. 
*/

/* How to handle arbitrary parameters using the “arguments” variable in JavaScript?
- Arguments are a special type of inbuilt variable available in JavaScript, 
which can handle an arbitrary number of parameters in a function.
*/

function display(){
    console.log(arguments[0] + " " + arguments[1]);
    }
    
           display("Tools","QA");

           console.log("**************");

/*
How to handle arbitrary parameters using the “rest parameter” in JavaScript?
The “rest parameter” is the advanced way provided by JavaScript to handle the arbitrary number of parameters.
*/
function multiply(...variables){
    var output =1;
    for(x of variables){
        output*=x;
    }
    return output;
 }
 console.log("Multiplication of 2 variables 3 and 5 is "+multiply(3,5));
 console.log("Multiplication of 3 variables 3,2 and 5 is "+multiply(3,2,5));
 console.log("Multiplication of 0 variables is "+multiply());
              console.log("**************");

// How to expand iterable objects using the “spread operator” in JavaScript?

function display(...args){ //This is rest operator 
    console.log("Total number of parameters are "+args.length);
      for(x of args){
         console.log(x+" ");
      }
   }
   var data = ["Tools","QA","JavaScript","Tutorial"];
   display(...data); //This is spread operator
   console.log("**************");

   