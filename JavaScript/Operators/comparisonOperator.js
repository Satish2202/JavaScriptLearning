
/* == */

let x=15,y=20;
let result;  //or console.log(x==y);
result=x==y;
console.log(result);

let a=15,b='15';
console.log(a==b); // this only checks value and not the data type.

/* === */

let c=15,d='15';
console.log(c===d); // this  checks both value and  the data type.

/* !=    Not equals */
let e=15,f='15';
console.log(e!=f); // this only checks value and not the data type.

/* !==    Not equals */
let h=15,g='15';
console.log(h!==g); // this  checks both value and  the data type.

/* > and < */
let j=12,l=14;
console.log(j>l);

let m=12,n=14;
console.log(m<n);

/* >= and <= */
let o=12,p=12;
console.log(o>=p);

let q=12,r=14;
console.log(q<=r);

/* ? Ternary Operators - its like if-then-else 
takes 3 arguments 
Syntax- condition ? value/exp if true : value if false
*/

let s=50, t=51
let output = s > t ? s : t
console.log(output)
