
/*
Classes in JavaScript are a type of function only, 
but instead of using the keyword “function,” the keyword “class” is used to declare a class.

If we want to perform some initialization or functionality while creating the object itself, 
you can achieve it with the help of defining those details inside a particular function called “constructor,” 
which invokes automatically when the creation of the object of the class happens. 
Now depending on the implementation, the “constructor” function may or may not accept parameters.
*/

// Constructor withoit parameters:
class Student{
    constructor(){
      console.log("I am in constructor")  
    }
   name; 
   getStudentName(){
      console.log(this.name);
   }
  }
 const student1 = new Student(); // whenever new objects of class is created, Constructor is called.
 student1.name="Arun";
 student1.getStudentName();
 const student2 = new Student(); // whenever new objects of class is created, Constructor is called.
 student2.name="Ravinder";
 student2.getStudentName();
 const student3 = new Student(); // whenever new objects of class is created, Constructor is called.
 student3.name="Lakshay";
 student3.getStudentName();
 console.log("*************");

 // How to define and invoke Class Constructor with Parameters?

 class Boy{
    name; 
    constructor(name){
      this.name = name;
      console.log("I am in constructor")  
    }
   getStudentName(){
      console.log(this.name);
   }
  }
 var Boy1 = new Boy("Arun");
 Boy1.getStudentName();
 var Boy2 = new Boy("Ravinder");
 Boy2.getStudentName();
 var Boy3 = new Boy("Lakshay");
 Boy3.getStudentName();

 console.log("*************");

 /*
           What are the Static Properties and Static Methods of a class?
 If you want certain properties and methods of a class to be associated with the class itself, 
 instead of the objects of the class, they can declare as static. 
 So, to invoke these methods and access these properties, 
 the instance of the class is not needed, but they can invoke using the class name itself.
 */
 class StaticKeyword{
    static name = "Ravi"; 
    static getStudentName(){
       console.log(this.name);
    }
   }
   StaticKeyword.getStudentName();
   console.log("*************");