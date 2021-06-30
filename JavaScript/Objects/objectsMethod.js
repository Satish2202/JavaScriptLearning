// methods provided by JavaScript Objects:

//hasOwnProperty()
var objectName = new Object();
     objectName.val1 = "Tools";
     objectName.val2 = "QA";
     objectName["val3"] = "Tutorials";
    
     objectName.getData = function()
     {
     return this.val1 + " " + this.val2 + " " + this.val3;
     }
 
     // Validate properties of the objectss
     console.log("Does val1 property exist in object: -- ",objectName.hasOwnProperty("val1"));
     console.log("Does val5 property exist in object: -- ",objectName.hasOwnProperty("val5"));
     console.log("Does getData property exist in object: -- ",objectName.hasOwnProperty("getData"));
console.log("*******************************")

// keys()
var objectName = new Object();
     objectName.val1 = "Tools";
     objectName.val2 = "QA";
     objectName["val3"] = "Tutorials";
     objectName.getData = function()
     {
     return this.val1 + " " + this.val2 + " " + this.val3;
     }
     // Validate properties of the objectss
     console.log("Print Keys of the object: -- ");
     console.log(Object.keys(objectName));
     console.log("***************************");

// getOwnPropertyDescriptor()
/*
Syntax= 
    value:       Actual value of the variable. By default, the value will be undefined.
    writable:    true if the value of the variable will get change with the help of assignment operators.
                 By default, the value will be false.
    enumerable:  True if this property will show up during enumeration of the corresponding object.
                 By default, the value will be false.
    configurable:true if the type of this property descriptor may change and if the property may delete from the corresponding object. 
                 By default will be false.
*/
var objectName = new Object();
            //Assign one property in the Object
     objectName.property1 = "Tools";
     // Get the descriptors of the property
            var descriptions = Object.getOwnPropertyDescriptor(objectName,"property1");
     // Print all the descriptors of the property
            for( index in descriptions)
     {
     console.log(index + " : " + descriptions[index]);
     }
     console.log("***************************");

// defineProperty()  - his method adds or edits the behavioral attributes of the property.
var objectName = new Object();
     objectName.val1 = "Tools";
     objectName.val2 = "QA";
     objectName["val3"] = "Tutorials";
     objectName.getData = function()
     {
     return this.val1 + " " + this.val2 + " " + this.val3;
     }
     var descriptions = Object.getOwnPropertyDescriptor(objectName,"val1");
     console.log("Descriptor attributes of property val1 before editing")
     for( index in descriptions)
     {
     console.log(index + " : " + descriptions[index]);
     }
     // Edit the property
     Object.defineProperty(objectName,'val1',{writable:false});
     var descriptions = Object.getOwnPropertyDescriptor(objectName,"val1");
     console.log("Descriptor attributes of property val1 after editing")
     for( index in descriptions)
     {
     console.log(index + " : " + descriptions[index]);
     }
     console.log("***************************");

