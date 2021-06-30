/*
Consider a scenario when you need to assign the array values or properties of an object to individual variables. 
Wasn’t that a tedious task to access and assign each value of the array or object and then assign to the individual variable. 
Destructuring has made it very easy in JavaScript.
*/

// / How to assign variables from an object using Destructuring?
//1.Destructuring an object with the same property names and variable names: 
var student = {
    name:'Arun',
    room:'4',
    course:'BE',
    fees:50000
 }
var {name,room, course,fees} = student;
console.log(name);
console.log(room);
console.log(course);
console.log(fees);
console.log("***********************");

// 2. Destructuring objects with the same property names but different variable names.
var student1 = {
    name1:'Arun',
    room1:'4',
    course1:'BE',
    fees1:50000
 }
var {name1: w,room1: x, course1:y,fees1:z} = student1;
console.log(w);
console.log(x);
console.log(y);
console.log(z);
console.log("***********************");

// 3. Destructuring a nested object: 
var student2 = {
    name2:'Arun',
    room2:'4',
    course2:'BE',
    fees2:50000,
    address:{
       city:'Bangalore',
       state:'karnataka',
       country:'india'
    }
 }
var {address:{city,state,country}} = student2;
console.log(city);
console.log(state);
console.log(country);
console.log("***********************");


// How to assign variables from the arrays using Destructuring?
// 1.Destructure arrays using basic ordered restructuring:
var[name1,name2] = ['Arun','Kumar','Tools','QA'];
      console.log(name1);
      console.log(name2);
      console.log("***********************");
// 2. Destructure arrays by skipping array elements: 
var[name1,,,name2] = ['Arun','Kumar','Tools','QA'];
      console.log(name1);
      console.log(name2);
