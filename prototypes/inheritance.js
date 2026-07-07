function Animal (name) {
    this.name = name;
}

Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
}

const animal = new Animal("Tiger");

animal.sayName();

// Inheritance

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!!");
}

const dog = new Dog("Ruby", "pamerian");

dog.sayName();
dog.bark();