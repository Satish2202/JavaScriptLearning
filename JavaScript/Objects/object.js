/*
An object is a non-primitive data type that represents a collection of properties and the methods which manipulate and
expose those properties. In other words, we can think of an object as a list that contains items, and a name-value pair store each item in the list. In other programming languages like Java, you need a class to create an object of it. 
Here, in JavaScript, an object is a standalone entity because there is no class in JavaScript.

--> The objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined, and
 symbol), and the following facts make it more clear:

-Objects pertain to more complex structures compared to primitive data types.
Additionally, each object may contain any combination of these primitive data-types, 
as well as a reference to these data-types.
- Moreover, an object is a reference data type. In other words, it means that objects don’t store the value,
 but they contain a reference to the location in memory where the actual values are stored.

 Syntax =
objectName.objectProperty = propertyValue;
or
objectName[objectProperty] = propertyValue;

- How to create JavaScript Objects?
Using Object literal.
Using Object Constructor (new keyword with Object).
Procedure to use Constructors (new keyword with functions).
Using Constructors (new keyword with class).
Procedure to use Prototypes (Object.create() method).
*/

// 1. Using Object literal.

// Declare an object
var obj = { 
    // Declare properties of the Object
    var1: "Tools",
    var2: "QA",
    var3: "JavaScript",
    //Declare method of the object
    displayInput:function () 
    {                
    console.log("Print values in function : ", this.var1 + " " + this.var2 + " " + this.var3);
    }
    } 
    console.log("Access values using [] notation : ");
    console.log(obj["var1"] + " " + obj["var2"] + " " + obj["var3"]);
    console.log("Access values using dot(.) notation : ");
    console.log(obj.var1 + " " + obj.var2 + " " + obj.var3 );
    // Invoke the function.
    obj.displayInput();
    console.log("**********************************");

    // 2. Using Object Constructor (new keyword with Object):
    // Declare an object
    var obj = Object();
    // Declare and initialize properties of the Object
    obj.var1 = "Tools",
    obj.var2 = "QA",
    obj.var3 = "JavaScript",
    //Declare method of the object
    obj.displayInput = function () 
    {                
    console.log("Print values in function : ", this.var1 + " " + this.var2 + " " + this.var3);
    }
    console.log("Access values using [] notation : ");
    console.log(obj["var1"] + " " + obj["var2"] + " " + obj["var3"] + "</br>");
    console.log("Access values using dot(.) notation : ");
    console.log(obj.var1 + " " + obj.var2 + " " + obj.var3 + "</br>");
    // Invoke the function.
    obj.displayInput();
    console.log("**********************************");

// 3. Using Constructors (new keyword with functions):
function displayInput(param1, param2) 
     {                
     this.param1 = param1;
     this.param2 = param2;
     }
     // Create object using function
     let display = new displayInput("Tools","QA");
     console.log("Value for param1: ", display.param1);
     console.log("Value for param2: ", display.param2);
     console.log("**********************************");

// Using Constructors (new keyword with class)

class displayClass {
    constructor(param1, param2) 
    { 
        this.param1 = param1;
    this.param2 = param2; 
    } 
} 
    // Create object using classs
    let display1 = new displayClass("Tools","QA");
    console.log("Value for param1: ", display1.param1,"</br>");
    console.log("Value for param2: ", display1.param2);
    console.log("**********************************");

// Using Prototypes (Object.create() method):
let displayVariable = { 
    param1: "Tools",
    param2: "QA"
} 
    // Create object using prototype
    let display2 = Object.create(displayVariable);
    console.log("Value for param1: ", display2.param1,"</br>");
    console.log("Value for param2: ", display2.param2);

    