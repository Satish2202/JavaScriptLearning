
// Function without parameters

function add(){
    console.log(5+2);
}
add();    //call function outside of it.
console.log('**************************');

//Function with parameters
function addition(a,b){
    console.log(a+b);
}
addition(4,10);
addition(100,50);  // function can be called multiple time by passing diffrent parameter values.
console.log('**************************');

// Return function
function add2Numbers(a,b){
  
    return(a+b);    // this will not print addition , it will just return addition value.
}
let result1 = add2Numbers(40,10);
let result2 = add2Numbers(150,50);  // function can be called multiple time by passing diffrent parameter values.
console.log(result1);
console.log(result2);