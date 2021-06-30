
/*
A mechanism of restricting direct access to some of the objects components.
A mechanism of bundling data with methods that operate on that data.

why encapsulation:
Security- Controlled access.
Hide implementation and Exposes behaviour.
Loose coupling - Modify the implementation at any time.
 */

class Employee{

    empdetails(name, id, phoneNumber){
        this.name = name;
        this.id= id;
        this.phoneNumber= phoneNumber;
    }
    empoyeeName(){
        return this.name;
    }
    empoyeeId(){
        return this.id;
    }
    employeeNumber(){
        return this.phoneNumber;
    }
}

let emp = new Employee();
emp.empdetails('John', 2564, 8265789854);
console.log('Employee details are : '+ emp.empoyeeName() + ' '+ emp.empoyeeId() + ' ' + emp.employeeNumber())