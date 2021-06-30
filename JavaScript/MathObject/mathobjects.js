// Constants provided by Math object
         console.log("Value of PI is: "+Math.PI);
         console.log("Value of Square root of 2 is: "+Math.SQRT2);
         console.log("Value of Square root of 1/2 is: "+Math.SQRT1_2);
         console.log("Value of Log of E to the base 10 is: "+Math.LOG10E);
         console.log("Value of Log of E to the base 2 is: "+Math.LOG2E);
         console.log("Value of Logarithm value of 2 is: "+Math.LN2);
         console.log("Value of Logarithm value of 10 is: "+Math.LN10);
         console.log("Value of Logarithm value of E is: "+Math.E);
         console.log ("*********************");

// Methods provided by Math object
// Abs()  = This method will return the absolute value of a given number
         console.log("Absolute value if positive integer (5) is provided:  "+Math.abs(5));
         console.log("Absolute value if negative integer (-5) is provided:  "+Math.abs(-5));
         console.log("Absolute value if null is provided:  "+Math.abs(null));
         console.log("Absolute value if string is provided:  "+Math.abs("Tools QA"));
         console.log("Absolute value if decimal value (-5.5) is provided:  "+Math.abs(-5.5));
         console.log ("*********************");

/* acos() = he acos() method will return the cosine value between 0 to value of PI (i.e., 3.141592653589793).
            Note: input can be a value between -1 to 1.
*/
         console.log("Arccosine value if positive integer (5) is provided:  "+Math.acos(1)); 
         console.log("Arccosine value if negative integer (-5) is provided:  "+Math.acos(-1));
         console.log("Arccosine value if zero integer (0) is provided:  "+Math.acos(0));
         console.log("Arccosine value if null is provided:  "+Math.acos(null));
         console.log("Arccosine value if string is provided:  "+Math.acos("Tools QA"));
         console.log ("*********************");
// acosh() = This function calculates the hyperbolic arc cosine value for the provided input. 
         console.log("Arccosine value if positive integer (20) is provided:  "+Math.acosh(20));
         console.log("Arccosine value if negative integer (-20) is provided:  "+Math.acosh(-20));
         console.log("Arccosine value if zero integer (0) is provided:  "+Math.acosh(0));
         console.log("Arccosine value if null is provided:  "+Math.acosh(null));
         console.log("Arccosine value if string is provided:  "+Math.acosh("Tools QA"));
         console.log ("*********************");

// asin() = The asin() method will return the sine value between -PI/2 to  PI/2. (input can be a value between -1 to 1.)

// asinh() = This function calculates the hyperbolic arcsine value for the provided input.

// Atan() = The atan() method returns the tangent value between -PI/2 to  PI/2.

// Atanh() = The atanh() function returns the hyperbolic arctan value for the provided input

// Cbrt: This function returns the cube root of the provided input.
console.log("Cube root value if positive integer (27) is provided:  "+Math.cbrt(27));
console.log("Cube root value if negative integer (-27) is provided:  "+Math.cbrt(-27));
console.log("Cube root value if null is provided:  "+Math.cbrt(null));
console.log("Cube root value if string is provided:  "+Math.cbrt("Tools QA"));
console.log("Cube root value if decimal value (-5.5) is provided:  "+Math.cbrt(-5.5));
console.log ("*********************");

// sqrt() = This function returns the square root of the provided input
console.log("Square root value if positive integer (36) is provided:  "+Math.sqrt(36));

/*  ceil() = This function returns the ceiling value of the input. 
E.g., if the input is 5.3, then the ceiling value will 6. 
*/
console.log("Ceiling value if positive input value (5.3) is provided:  "+Math.ceil(5.3));

// Floor: = This function returns the floor value of the provided input. E.g., the floor value of 5.8 will be 5. 
console.log("Floor value if positive input value (5.3) is provided:  "+Math.floor(5.3));

// Exp = This function returns the exponential value of the given input
console.log("Exponential value if positive input value (5.3) is provided:  "+Math.exp(5.3));

//Round: This function returns the rounded value of decimals.
console.log("Rounded value if positive input value (5.3) is provided:  "+Math.round(5.3));

// Max = This function returns the maximum value in the given set of values.
console.log("Max value if positive input value (5.3,6.5,3.2,5.5,9,10.2) is provided:  "+Math.max(5.3,6.5,3.2,5.5,9,10.2));
// Min = This function returns the minimum value in the given set of values.  
console.log("Min value if positive input value (5.3,6.5,3.2,5.5,9,10.2) is provided:  "+Math.min(5.3,6.5,3.2,5.5,9,10.2));
// Pow = This function returns the power value of the given input
console.log("2 to the power of 3 is :  "+Math.pow(2,3));

//Random = This function returns a random value between 0 to 1. 
         console.log("1st Random value is :"+Math.random());
         console.log("2nd Random value is :"+Math.random());
         console.log("3rd Random value is :"+Math.random());