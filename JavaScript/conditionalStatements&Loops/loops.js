/* for loop */
let i;
for (i=1; i<=5; i++){
console.log('value of i is : '+i);
}

/* for in loop */
let fruits = ['Apple','Banana','Mango', 'Banana']
let x;
for (x in fruits){
    console.log(x)
    console.log(fruits[x])
}

/* for of loop */
for (x of fruits){
    console.log(x)
}

/* While */
let counter =5;
while (counter<=15){
    counter= counter+1;
    console.log('counter values is : '+counter)
   //counter= counter+1;    
}

console.log('****** While loop is over ******')

/*do while */
let numb1 = 7;
do {
    console.log('counter values is : '+numb1)
    numb1++;
}while ((numb1<=6))  //here at least it will run once before condition is checked.

