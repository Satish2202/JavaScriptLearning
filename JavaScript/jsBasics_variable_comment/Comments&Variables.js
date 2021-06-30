
/**************  Comments *********************/
// This is a single line Comment in JAVASCRIPT

/*
This is a Multi-Line Comment
*/

/*
Comments are used to provide information about code.
Can be used to provide any information or suggestions.
Makes easy to understand the code or get the more information
Can also be used to comment out code sections
Comments are ignored by JavaScript engines
*/

/*************** Variables ****************** */

let x = 10;
var x= 11;  // var was used earlier. now can be used but not suggested.instead let is used.

let y;
y=15;

let message = 'Hello';
message = 'Welcome'; // Variable value can be changed and new value can be assigned. lod value will ge deleted.

let a,b; // Multiple valriable can be declared in JavaScript.
a=5;
b=9;

let c=6, d=8; // this multiple variable assignment is also valid.

/* Used to Store data
Can be looked as container for storing data values
Must contain only Letters, Digit or $ and _symbol
Must begin with a letter or underscore_
should not start with numbers
must not be reserved keyword like if, else, boolean, let etc.
Variable are case senseitive. example - let name; and let Name; are two different variables.
Use meaningful names to variables.
Use Camel casing. example- firstName
*/

/**************** Toos QA ****************/
/*
1.Variables are just the name of the storage location. 
  Moreover, we can also call them as containers that hold some data during the program execution.
JavaScript is a dynamic type (loosely typed) language. 
  Which, in turn, means that users needn’t explicitly specify the type of data to store in a variable. 
  The JavaScript engine will dynamically use it based on the type of data assigned to the variable

2. Data Types:
Primitive = These are the predefined types of data that are supported by the programming language.
 Example -Numbers,Strings,Boolean, Null, Undefined
Boolean: logical entity having values as true or false.
Numbers: Represents numeric values and can store integers and decimals.
Strings: Represent a sequence of characters such as  “Hello World.” Strings can store in single quotes or double-quotes.
Undefined: A variable that has an unassigned value will have an undefined default value.
Null: In JavaScript, null means”nothing.” It is something that doesn’t exist.

Composite or Non-Primitive = The programming language does not predefine these data types, but instead, the programmer creates it. 
Additionally, the composite data types come into existence when the grouping of multiple values happens
Example-Objects, Arrays
Object: It is an instance of a class that accesses the data and members encapsulated in the class.
Arrays: It is a group of similar kinds of values.

Variable declaration=
var test;   - tets is variable

variable initialisation=
test =10;

Declare and Initialise together=
var test =10;

var test1='john',test='Dheer',test='200';
or
var test1 = "John",
test2 = "Dheer",
test3 = 200;

How to access JavaScript Variables?
document.write();

Scope of Variable=
1. Local = variables declared inside the function/method or block comes under the local scope.
           These variables have access only inside these methods/functions or blocks only.
           Example-
<html>
<head>
      <script type = "text/javascript">     
            function checkVariable( ) {
               myVar = "ToolsQA";  // local variable only accessed inside this function
               document.write(myVar);  
            }
     </script> 
</head>
<body onload = checkVariable()>      
</body>
</html>

2. Global=
variables declared outside all the functions or methods come under the global scope, 
and any methods/functions or blocks can access them
Example=
<html>
<head>
    <script type="text/javascript">         
        var myVar;//this is the global variable and it can be accessed in all the functions
        function checkVariable( ) {
            myVar = "ToolsQA"; // Assign value to the global variable
         }                 
        
        function clickButton(){
            alert(myVar); // Print value of the global variable
        }              
    </script>
</head>
<body onload=checkVariable()>          
<button onclick="clickButton()">Click me</button> 
</body>
</html>
 */