
class Car{

carName(name){
this.name= name;

}
startEngine(){

    console.log('Engine started for : ' + this.name);
}

stopEngine(){

    console.log('Engine Stopped for : ' + this.name);
}
}

class Toyota extends Car {
    topSpeed(speed){
        console.log('Top speed for the ' + this.name + " "+ speed);
    }
    }

let myCar = new Toyota();
myCar.carName('Camry');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);