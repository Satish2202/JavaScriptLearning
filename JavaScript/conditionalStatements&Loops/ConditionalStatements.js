/* if statement */

let age=20
if (age>45){
    console.log('Age is more than 45 years')
} 
else if(age=20){
    console.log('Age is 20 years')  // you can use multiple Else if block
}
else{
    console.log('Age is less than 45 years')
}


/* switch statement*/
let score = 50

switch(score){
    case 10: 
    console.log('Your score is too low. Retake the Exam')
    break
    case 25: 
    console.log('You are failed')
    break
    case 50: 
    console.log('Congrats! you are passed')
    break
    case 100: 
    console.log('Conratulation!. you have secured 1st rank')
    break
    default:
    console.log('Enter Valid score')
    

}