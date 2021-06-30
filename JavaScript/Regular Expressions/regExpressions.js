
/* 
RE are cases sensitive	

Syntax - 
- let variableName = /RegExp/
- let variableName = new RegExp('Regex Expression')

Methods to execute RE -
test() and exec() to evaluate a regular expression.
*/ 

// How to use the test() method to evaluate a regular expression?
let reg = /T..l/ // This represent a single character
console.log('T..l Metacharacter for String ToolsQAT')
console.log(reg.test("ToolsQAT"))
console.log("****************************");

// How to use the exec() method to evaluate a regular expression?
let reg1 = /T..l/ // This represent a single character
     console.log('T..l Metacharacter for String ToolsQAT')
    //  the exec method will provide the array string which is matching with the given pattern.
     console.log(reg1.exec("ToolsQAT")) 
     console.log("****************************");

// other ways of defing Reg Expression
let reg2=/[toolsqa]/; //Mathcing any one character
      console.log('Matching any character available in given string')
      console.log(reg2.test("TOOLSqA"))
      reg2=/[^toolsqa]/; //checking any characters is available apart from regex exp
      console.log('Checking there is character in a string which is not available in regexp')
      console.log(reg2.test("toolsqa"))
      reg2=/[a-z]/; //Matches any character from lowercase a to lowercase z
      console.log('Checking given string is in lowercase letter')
      console.log(reg2.test("toolsqa"))
      reg2=/[A-Z]/ //Matches any character from uppercase A to uppercase Z
       console.log('Checking given string is in uppercase letter')
       console.log(reg2.test("TOOLSqa"))
       reg2=/[0-9]/ //Matches any character from 0 to 9
       console.log('Checking given string is in any number')
       console.log(reg2.test("TOOLSqa123"))
       console.log("****************************");

       // How to use Quantifiers to define a regular expression?
       let reg3 = /T+/ // this quantifier is used to match string contains one or more T
       console.log('T+ Quantifier for String ToolsQAT')
       console.log(reg3.test("ToolsQAT"))
       console.log('T+ Quantifier for String oolsQA')
       console.log(reg3.test("oolsQA"))
       reg3 = /T*/ // this quantifier is used to match string contains zero or more T
       console.log('T* Quantifier for String ToolsQAT')
       console.log(reg3.test("ToolsQAT"))
       console.log('T* Quantifier for String oolsQA')
       console.log(reg3.test("oolsQA"))
       reg3 = /T$/ // this quantifier is used to match string contains  T at end of the string
       console.log('T$ Quantifier for String ToolsQAT')
       console.log(reg3.test("ToolsQAT"))
       console.log('T$ Quantifier for String ToolsQA')
       console.log(reg3.test("ToolsQA"))
       reg3 = /^T/ // this quantifier is used to match string contains  T at Starting of the string
       console.log('^T Quantifier for String ToolsQAT')
       console.log(reg3.test("ToolsQAT"))
       console.log('^T Quantifier for String oolsQAT')
       console.log(reg3.test("oolsQAT"))
       reg3 = /T?/ // this quantifier is used to match string contains  T zero or one
       console.log('T? Quantifier for String ToolsQA')
       console.log(reg3.test("ToolsQA"))
       console.log('T? Quantifier for String oolsQA')
       console.log(reg3.test("oolsQA"))
       reg3 = /T{3}/ // this quantifier is used to match string contains  T consecutively 3 times
       console.log('T{3} Quantifier for String TTToolsQA')
       console.log(reg3.test("TTToolsQA"))
       console.log('T{3} Quantifier for String ToolsQAT')
       console.log(reg3.test("ToolsQAT"))
       console.log("****************************");

// How to use Metacharacters to define a regular expression?
let reg4 = /T..l/ // This represent a single character
     console.log('T..l Metacharacter for String ToolsQAT')
     console.log(reg4.test("ToolsQAT"))
     reg4 = /\s/ //This is for white space or tab or new line
     console.log('/\s/ Metacharacter for String ToolsQA')
     console.log(reg4.test("ToolsQA"))
     console.log('/\s/ Metacharacter for String Tools QA')
     console.log(reg4.test("Tools QA"))
     reg4 = /\S/ //This is for non white space or tab or new line
     console.log('/\S/ Metacharacter for String ToolsQA')
     console.log(reg4.test("ToolsQA"))
     console.log('/\S/ Metacharacter for String  <space> ')
     console.log(reg4.test(" "))
     reg4 = /\d/ //This is for only digits
     console.log('/\d/ Metacharacter for String 123test123')
     console.log(reg4.test("123test123"))
     console.log('/\d/ Metacharacter for String  ToolsQA')
     console.log(reg4.test("ToolsQA"))
     reg4 = /\D/ //This is for only non digits
     console.log('/\D/ Metacharacter for String 12345')
     console.log(reg4.test("12345"))
     console.log('/\D/ Metacharacter for String  ToolsQA')
     console.log(reg4.test("ToolsQA"))
     reg4 = /\w/ //This is for only alpha numeric
     console.log('/\w/ Metacharacter for String ToolQA123')
     console.log(reg4.test("ToolsQA123"))
     console.log('/\w/ Metacharacter for String  ++/;[]')
     console.log(reg4.test("++/;[]"))
     reg4 = /\W/ //This is for only non alpha numeric
     console.log('/\w/ Metacharacter for String ToolQA123')
     console.log(reg4.test("ToolsQA123"))
     console.log('/\w/ Metacharacter for String  ++/;[]')
     console.log(reg4.test("++/;[]"))
     console.log("****************************");

// How to use Modifiers to define a regular expression?
let reg5= /toolsqa/i
      console.log(" i modifiers is used to ignore case")
      console.log(reg5.test("TOOLSQA"));
      reg5  = /qa/m
      console.log(" m modifer is used to match even in new line")
      console.log(reg5.exec("ToolsQA \n i am in new line qa"))
      reg5 = new RegExp("qa","g");
      console.log(" g modifer is used to match all the string compared to expression")
      console.log(reg5.exec("Tools qa is a qa site"))
      console.log(reg5.exec("Tools qa is a qa site"))
      console.log(reg5.exec("Tools qa is a qa site"))
      console.log("****************************");

