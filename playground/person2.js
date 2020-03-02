class Person {
    constructor(firstName,lastName,age,likes =[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes; 
    }

getBio(){
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((likes)  => {
        bio += `${this.firstName} likes ${like}.`
    })

   return bio;

}


setName(fullName){
    const names = fullName.split('')
    this.firstName = names [0]
    this.lastName= names[1]
}
}
const me = new Person('Clancey','Will',27);
me.setName('Jenna Aurora')

 

//INHERITANCE
class Student extends Person {
    constructor(firstName,lastName,age,grade,likes){
    //use super keyword to inherit from the parent
    super(firstName,lastName,age,likes);
    this.grade = grade;

}
updateGrade(change){
    this.grade += change
}
getBio(){
    //ternary
    const status = this.grade >= 70 ? 'passing' : 'failing' ;
    return `${this.firstName} is ${status} the class `
}
}
 
// const me1 = new Student('Jenna' ,'Aurora',25,88)
// console.log(me1.getBio())
// me1.updateGrade(-19);
// console.log(me1.getBio());

//create an employee class
//one constructor parameter should be position
//create methods getBio output example John Smith is a software engineer
//getYearsLeft  ,65(30) years is the retirement age,age

class Employee extends Person {
    constructor(firstName, lastName, age, position,likes) {
    super(firstName,lastName,age,likes);
    this.position = position;

    }
getBio (){
    return `${this.firstName} ${this.lastName} is a ${this.position}.`

}

getYearsLeft(){
    return 65 - this.age
}

}
const me2 = new Employee('John','Smith',30,'Software Engineer')
console.log(me2.getBio())
me2.getYearsLeft(30)
console.log(me2.getYearsLeft())






