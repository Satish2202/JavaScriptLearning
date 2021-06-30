/*
- A string represents any text inside a quote pair, and the quote pair can consist of either double or single quotes.
-JavaScript doesn’t impose any limit on the number of characters that a string can hold, 
but most of the old browsers support 255 characters only.
- In addition to the above, JavaScript doesn’t have a particular type that represents a single character of String. 
To represent a single character, we need to use a string of length 1.

- Initializing String using “String literal” method:
var var1 = 'Tools QA';
var1 = "Javascript Tutorials";

- nitializing String using “new” Keyword:
var var1 = new String('Tools QA');
var1 = new String("Javascript Tutorials");
*/

var var1 = new String('Tools QA tutorial for Javascript');
 
         console.log("Length of the input String is : "+var1.length);
 
         console.log("Character At index 6 in provided string is: "+var1.charAt(6));
 
         console.log("Character unicode At index 6 in provided string is: "+var1.charCodeAt(6));
  
         console.log("Index value of character 'Q' in provided string is: "+var1.indexOf('Q'));
  
         console.log("Last value of character 's' in provided string is: "+var1.lastIndexOf('s'));
 
         var str2 = " for beginners";
 
         console.log("Concatenation of provided 2 strings are: "+var1.concat(str2));
  
         console.log("Substring from index 0 to 8 strings are: "+var1.substr(0,8));
  
         console.log("Converting provided string to lowercase: "+var1.toLowerCase());
  
         console.log("Converting provided string to uppercase: "+var1.toUpperCase());
  
         var value2 = 543.55;
 
         console.log("Converting number object to string: "+value2.toString());
  
         var value3 = "9099";
 
         console.log("Converting String object to primitive: "+value3.valueOf());
  
         console.log("Splitting String based on ' ' character: "+var1.split(' '));
