//Bitwise operatos treats arugument as 32-bit numbers an dwork on the level of thier binary representation.

/* &  AND*/ 
//set each bit to 1 if both bits are 1
let a= 1,b=2;
console.log(a&b)
/* | OR*/
//set each bit to 1 if one of two bits is 1
let c= 1,d=2;
console.log(c|d)
/* ^ XOR */
//set each bit to 1 if only one of two bits is 1
let e= 1,f=2;
console.log(e^f)

/* ~ */
//inverts value
 let h=2;
console.log(~h)
console.log(~1)

/* << */
//shift left and fills empty spaces with 0
let i= 1,j=2;
console.log(i<<j)

/* >> */
//shift right and fills empty spaces with 0
let l= 1,k=2;
console.log(l>>k)