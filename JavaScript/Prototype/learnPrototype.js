/* In JS, evry function has a property called prototype.
By default this property is empty.
You can add properties and methods to it.
*/

// function EmpDetails(){
// };

//  let EmployeeDetails = function(name, age){  // this is a constructor. 
//         this.name=name;
//         this.age=age;                    // In JavaScript you can create constructor withoit creating class.

//         this.getName = function(){     //constructor can have its own function.
//             return this.name;
//         }
//         this.getAge = function(){
//             return this.age;
//         }
//  };

//  let emp1 = new EmployeeDetails('John', '30');
//  let emp2 = new EmployeeDetails('Peter', '50');

//  console.log(emp1.getName());
//  console.log(emp2.getAge());

 /* 
in JavaScript we have prototype based inheritance
suppose there is function X.
when you create another function that is inherited from x,
it will inherit the methods and prototype defined in X's prototype. 
 */


/*  ***************************************************************************************************  */

function EmpDetails(){
}

 let EmployeeDetails = function(name, age){  // this is a constructor. 
        this.name=name;
        this.age=age;                    // In JavaScript you can create constructor withoit creating class.
        
 };
EmployeeDetails.prototype.getName = function(){     
    return this.name;
};
EmployeeDetails.prototype.getAge = function(){     
    return this.age;
};

 let emp1 = new EmployeeDetails('John', '30');
 let emp2 = new EmployeeDetails('Peter', '50');

 console.log(emp1.getName());
 console.log(emp2.getAge());