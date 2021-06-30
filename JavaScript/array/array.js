/*
To store multiple values in a single variable
an array’s length can change at any time.
JavaScript array is an object that represents a collection of similar type of elements.

operations on array:
- Iterate all the elements of an array.
- Add a new element to the end of the array.
- Add a new element to the front of the array.
- Remove an element from the end of the array.
- Remove and element from the front of the array.
- Find the index of an element in the array.
- Remove an element from the specified index of the array.
*/

let numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
console.log('*****************');

console.log('*****************');
let fruits = ['Apple','Mango','Banana','Lemon','Badam'];
console.log(fruits);
console.log(fruits.length);
// add element in array
fruits.unshift('Tomato'); // add at the start
fruits.push('Cherry');  //add at the end
console.log(fruits);
console.log(fruits.length);
console.log('*****************');
// delete element from array
fruits.pop();  //dele element at the last
fruits.shift(); //Delete first element from array
delete fruits[1]; // will delete element at position 3, but index position will still remain there.
console.log(fruits);
fruits[1]= 'Orange';
console.log(fruits);

//find index of array element
console.log(fruits.indexOf('Cherry'));
console.log(fruits.indexOf('Banana'));
console.log(fruits.indexOf('Apple'));
console.log('*****************');


let cars = new Array('Tesla','TATA','Ford','Toyota','BMW');
console.log(cars);
console.log(cars[0])
console.log(cars[3])
cars[3] = 'Mahindra';
console.log(cars[3])

console.log('*****************');

//loop for array
let x;
for (x in cars){
    //console.log(cars[x]);
    if (cars[x] =='Tesla' || cars[x]=='Ford' || cars[x]=='BMW'){
        console.log(cars[x]+' : Foreign Car');
    }
    else{
        console.log(cars[x]+' : Indian Car');
    }
}

console.log('********************');

let friends = ['Robert','Shubham','Smith','Dinesh'];
let y;
 for (y of friends){
     //console.log(y);
     if (y=='Shubham'){
         console.log(y+" is My Friend");
     }else{
        console.log(y+" is not My Friend");
     }
 }
