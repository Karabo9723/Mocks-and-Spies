class Person {
    constructor(name,age,gender,interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
  
      }
      sayHello(){
          return("Hello, my name is " + this.name + " and " + "I am " + this.age + " years old "+ this.gender + "." + " My interests are " + this.interests[0] + "," + this.interests[1] + " and" + this.interests[2] + ".");
      }
 
  }
  

  let person = new Person('Ryan',30,'male',['being a hardarse',' agile', ' ssd hard drives'] )
  let greeting = person.sayHello();
  console.log(greeting);

  module.exports = Person;