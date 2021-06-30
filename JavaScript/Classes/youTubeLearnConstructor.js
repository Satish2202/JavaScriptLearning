class Employee{
/* 
Constructor - 
    Class always has a default Constructor.
    Constructor of class is callvery time you instantiate class or evry time you create object of a class.
    */
    constructor (firstname, lastname){

        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let emp = new Employee('Satish', 'Matere');
let emp1 = new Employee('Bharat', 'Chouhan');

console.log(emp.firstname + " " + emp.lastname);

console.log(emp1.firstname + " " + emp1.lastname);