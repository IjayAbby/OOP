const Person = function(firstName,lastName,age){
    this.firstName = firstName;
    this.middle
    this.lastName = lastName;
    this.age = age;
    
}

//this === person
//Person.firstName;
// Person.prototype.getBio = function (){
//     let bio = `${this.firstName} is ${this.age}`;
//     return bio;
// }
Person.prototype.data = function (){
    let data = `My name is ${this.firstName} ${this.lastName}`
    return data;
}



//create a prototype setName('Jenna','Aurora')

Person.prototype.setName = function (fullName){
    const names = fullName.split(' ')
    this.firstName = names [0]
    this.lastName= names[1]
}
const me = new Person('Clancey','Will',27);
me.setName('Jenna Aurora')
console.log(me.data())
