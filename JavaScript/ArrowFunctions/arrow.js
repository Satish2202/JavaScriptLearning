/*
An Arrow Function in JavaScript is a syntactically compact option/ alternative to a regular function expression. These are anonymous functions with their unique syntax that accept a fixed number of arguments and
operate in the context of their enclosing scope – i.e., the function or other code where they are defined
*/

// Syntax
let func1 = () => {
    console.log('func')
  }
  func1();


  // Declaring Arrow function with Multiple Parameters:
  const addES6 = (param1, param2) => {
    console.log(param1 + " "+ param2);
      return param1 + param2 
    };
    addES6('Satish','Matere');

// Declaring Arrow function with One Parameter:
const splitResultEs6 = inputString => inputString.split(" ");
         console.log("Split result using ES6: " + splitResultEs6("This is ToolsQA Demo"));

// Declaring Arrow function with No Parameter:
const printEs6 = () => console.log("This is ToolsQA demo for Arrow functions</br>");
         printEs6();


    
    
