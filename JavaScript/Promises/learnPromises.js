let promiseCleanRoom = new Promise(function(resolve,reject){
    cleanRoom = true;
    if(cleanRoom){
      resolve('Cleaned the Room');
    }else{
      reject('Broke the promise');
    } 
})
promiseCleanRoom.then((result)=>{
      console.log(result)
}).catch((result)=>{
   console.log(result) // will execute if promise is rejected or errored out
})