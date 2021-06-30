/*
An Abstraction is a way of hiding the implementation details and showing only the functionality to the users.
*/

function Employee(name, age, salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
    let bonus = 1000;   // by creating local variable, nounus will not be accessible outside this function.
//function to calculate salary
    let calFinalSalary= function(){   // line bonus variable, create this function as local function to avaod access outside employee function
    let finalSalary = salary + bonus;  // no need to use this keyword
    console.log('Final Salary : ' + finalSalary);

    //function to getEmpdetails
}
    this.getEmpDetails = function(){
        console.log('Name : ' + this.name + ' Age : '+ this.age);
        calFinalSalary();
    }
}
let emp1 = new Employee ('John', 30, 2000);
emp1.getEmpDetails();
