/* typeof */
//returns data type of variable

let firstName= 'Raghav'
console.log(typeof firstName)
console.log(typeof 125)
console.log(typeof 125.50)
console.log(typeof true)
console.log(typeof .50)
console.log(typeof [1,2,34])
console.log(typeof {name:'Peter', age:25} )
console.log(typeof new Date())
console.log(typeof null)
console.log(typeof function() {})
console.log(typeof myClass)


/* instanceof */
//returns true if an object is an instance of an object type
let lastName= new String('Pal')     //you hav eto create instance of object
console.log(lastName instanceof String)
let num1= new Number(256)
console.log(num1 instanceof Number)

