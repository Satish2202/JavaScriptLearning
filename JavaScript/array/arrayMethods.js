
// What is the map() method, and how to use it?

/* The map() method creates a new array from an existing one, 
applying a function to each one of the elements of the first array. */

var arrayValue  = [9,3,7,21,6,8];
 
            var output = arrayValue.map(x => x+50);
 
            for(i =0 ;i<output.length;i++){
 
               console.log(output[i]);
 
            }
            console.log(output);
            console.log ('********************************')
// What is reduce() in Javascript Array Methods, and how to use it?

//The reduce() method reduces an array of values down to just one value. 
var arrayValue = [500, 200, 100, 100];
     var iteration = 1;
     var output = arrayValue.reduce(userFunction); // Perform reduce on each of the elements
 
     function userFunction(firstValue, restTotalValue) 
     {
     console.log('Running Iteration: ', iteration);
     console.log('Initial value: ', firstValue);
     console.log('Next value: ', restTotalValue);
     iteration++;
     return firstValue - restTotalValue;
     }
     console.log('Final Result:', output);

     console.log ('********************************')
    // What is reduceRight() in Javascript Array Methods, and how to use it?
/* JavaScript provides one more version of the reduce() method,
 which works on the last element of the array, instead of the first element */
 var arrayValue1 = [500, 200, 100, 100];
     var iteration = 1;
     var output = arrayValue1.reduceRight(userFunction);
 
     function userFunction(firstValue, restTotalValue) 
     {
        console.log('Running Iteration: ', iteration);
        console.log('Initial value: ', firstValue);
        console.log('Next value: ', restTotalValue);
        
     iteration++;
     return firstValue - restTotalValue;
     }
     console.log('Final Result:', output);

     console.log ('********************************')

// What is the filter() method in JavaScript, and how to use it?
/* 
The filter() method takes each element in an array, and it applies a conditional statement against it. 
If this conditional statement returns true, the element gets pushed to the output array. 
However, if the conditional statement returns false, the element does not get pushed to the output array.
*/
var arrayValue  = [2,3,4,5,6,7,8];
            var output = arrayValue.filter(x => x%2==0); // Will save value to output array 
                                                         // only when it is divisible by 2
            for(i =0 ;i<output.length;i++){  
                console.log(output[i]);
            }
            console.log(output);
    console.log ('********************************')

//    What is the copyWithin() method in JavaScript, and how to use it?
/*
This copyWithin() function copies array elements from one index to another index within the same array.
By doing this, it will overwrite the existing value of that index. 
indexValue: the index where the copied elements need to paste.
startIndex: The index from which copy needs to be started. By default, the value will be 0.
Moreover, this field is optional.
endIndex: The index up to which copy needs to end. By default, the value will be arraylength-1.
Additionally, this field is optional.
*/
var arrayValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
     
     // Copy elements on 6th index, starting from 0 to 2nd index,
     // where 0 is inclusive and 2 is exclusive
     arrayValue.copyWithin(6, 0, 2);
 
     for (i = 0; i < arrayValue.length; i++)
     {
        console.log(arrayValue[i]);
     }
     console.log(arrayValue);
     console.log ('********************************')

 //    What is the entries() JavaScript function, and how to use it?
/*
 The entries() method returns an Array Iterator object with key/value pairs. 
For each item in the original array, 
the new iteration object will contain an array with the index as the key and the array item value as the value.
*/
var arrayValue  = ["Tools","QA","JavaScript","Tutorial"];
            var output = arrayValue.entries();
            for(var x of output){
                console.log(x);
            }
      ('********************************')

//What is the fill() JavaScript function, and how to use it?
/*
The fill() method is used as a replace function where it will replace the element by index basis instead of value.
fillValue: The value that will replace.
startIndex: From which, index value needs to get replaced.
The default value is 0. It is an optional field.
The default value is length-1. It is an optional field.
If there is no start end value, then all values in the array will get replaced.
*/
var arrayValue  = ["Tools","QA","JavaScript","Tutorial"];
 
var output = arrayValue.fill("Tuts",3,4);

for(var x of output){

    console.log(x);

}