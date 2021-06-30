/*
1. setTimeout()
Syntax-
let timerId = setTimeout(function, timeInMilliseconds, <em>param1, param2, ...</em>);
function: This parameter specifies the function that needs to execute.
                    Additionally, it is a mandatory parameter.
timeInMilliseconds: The parameter specifies the “number of milliseconds” to wait before executing the code. 
                    If omitted, we use the value 0. Additionally, it is an optional parameter.
param1, param2, … : These are the additional parameters to pass to the function. 
                    Moreover, these are the optional parameters.
*/

setTimeout(()=>{
    console.log("Tools QA");
},2000)

/*
setInterval()
let timerId = setInterval(<em>function, timeInMilliseconds, param1, param2, ...</em>)
function: This parameter specifies the function that needs to execute.
          Additionally, it is a mandatory parameter.
timeInMilliseconds: The parameter specifies the intervals (in milliseconds) on how often to execute the code. 
                    If the value is less than 10, we use the value 10. Also, it is an optional parameter.
param1, param2, … : These are the additional parameters to pass to the function. 
                    Moreover, these are the optional parameters.
*/
var myVar = setInterval(myTimer, 1000);
 
      function myTimer() {
        var date = new Date();
        var time = date.toLocaleTimeString();
        console.log(time);
      }

      function stopWatch() {         // clearInterval() method
        clearInterval(myVar);
}

/*

clearTimeout()
Syntax- clearTimeout(timerId_of_setTimeout) 

*/
