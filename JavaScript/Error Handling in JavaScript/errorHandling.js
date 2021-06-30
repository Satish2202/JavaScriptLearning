/*               What is Error Handling in JavaScript?
Error handling, as the name states, is a strategy that handles the errors or exceptions which occur at runtime.
*/

// What is the Try Catch and finally block?

function divide(num1, num2) {
    console.log("Result of dividing " + num1 + " by " + num2 + " is:" + num1/num2);
  }
  try{
      divide(200,100);
      //the folllowing line will cause the run time exception, as by mistake method name is wrong
      divid(200,50);
      console.log("The code from here does not execute")
   }
   catch(e){
     console.log(e.message)        // e.message provides information about the exception.
     console.log(e.description)     // e.description describes the exception.
     console.log(e.stack)   /* e.stack provides the stack trace information like in above it is showing which line number and 
                                  column number in that line caused an exception */
   }

   finally  
   // there is a particular piece of code that you want to execute, no matter whether the exception raised or not
       { 
        console.log("Finally Block: This will be executed always");
       }
       console.log("This program is expected to be executed");

       console.log("*********************************")
/*  How to create a user-defined exception with the help of throw keyword?
If you want to give some customized messages or details when an exception raises, 
JavaScript provides the “throw” keyword to handle such a situation.
*/

function divide(a,b){
    if(b==0){
       throw{
          error:"Divide by zero",
          message:"Denominator cannot be zero",
          description:"User sent the denominator as zero"
       }
    }
 }
 try{
      divide(10,0)
 }
 catch(e){
    console.log(e.error)
    console.log(e.message)
    console.log(e.description)
 }

 console.log("*********************************")

