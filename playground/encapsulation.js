//procedural implementation ie variables are different from functions
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary,overtime,rate){
    return baseSalary + (overtime * rate)
}

//Using Encapsulation where functions rep method & variables rep property of the object.
let employee = {
    baseSalary : 30_000,
    overtime : 10,
    rate : 20,
    getWage : function () {
        return this.baseSalary + (this.overtime * this.rate )
    }
};
console.log(employee.getWage(20));

// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`The rabbit says ${line}`);
// }
// rabbit.speak("I am alive")

//ABSTRACTION.
//Same as encapsulation though it uses fewer properties & methods
//reduces code complexity & impact of change
  
