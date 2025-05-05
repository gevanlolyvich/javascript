class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}
//instance dari Person
const person1 = new Person('alice', 25);
const person2 = new Person('john', 30);

console.log(person1.name, person1.age); //melihat isi property
console.log(person2.name, person2.age);

person1.eat(); //melihat isi method
person2.eat();

