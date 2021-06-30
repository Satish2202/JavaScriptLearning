
class Employee{

    setDetails(name, id){
        this.name = name;
        this.id= id;
    }
}
let emp1 = new Employee();
emp1.setDetails('John', 112436);
console.log(emp1.name);
console.log(emp1.id);
