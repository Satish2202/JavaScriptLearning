
class Animal {

    constructor (name){
        this.name=name;
    }
    eats(){
        console.log(this.name+' eats food');
    }
}

class Alligator extends Animal{

    eats(){

        super.eats(); //  by super keyword you can call parent class eats() method.
        console.log(this.name+' eats fishes');
    }
}

let murphy = new Alligator ('Murphy');
murphy.eats();   // this will executes child class function. 
                 // if you comment out child class eats() method, it will executes paraent class eats() method.
                 // eat function has many form and on the basis of object created for class, eats() function get executed.
