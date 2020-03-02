//Creating Objects
//Using factory function - when you return an obj inside inside a function
function createCircle (radius){
    return {
        radius,
        draw: function (){
            console.log("draw");
        }
    }
}
const circle = createCircle(1);
circle.draw

//Using Constructor function
//use new keyword to create a new obj
//use this to refer to the global object
//their functions first letter are in uppercase

function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);

