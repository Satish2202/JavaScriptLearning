let firstArray = ["Tools", "QA", "Website",'Testing','Automation'];

//  How to remove an item from the index position of an Array? 
firstArray.splice(firstArray.indexOf("QA"),1); 
console.log(firstArray);
firstArray.splice(1,2)  // delete element at index position of 1 and 2
console.log(firstArray);

firstArray.splice(2,0,'Selenium','TestComplete'); // 2 mean 2 element to add and 1 means 1 element to remove.
console.log(firstArray);
//slice method
console.log('*******************************');
let selectElements = firstArray.slice(2,3);
console.log(selectElements);
console.log(firstArray);
/*
let toolsArray = firstArray.splice(2,3); // it will create new array of selected element from previous array and element will be removed from previous array
console.log(toolsArray);              
console.log(firstArray);
console.log('*****************************');
*/
console.log('*******************************');
console.log(firstArray.indexOf('QA'));
console.log(firstArray.indexOf('Website'));
console.log(firstArray.indexOf('Tools'));
console.log('*****************************');

// How to Iterate all elements of an array in JavaScript?
var secondArray = ["Tools", "QA", "is", "best", "tutorial", "site"];
secondArray.forEach(function(item, index, array){
 console.log(item, '---', index); 
 if (item == 'is'){
     console.log(item + ' : Verb');
 }
}
)
