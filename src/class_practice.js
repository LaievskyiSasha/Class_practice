class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.name = `${this.firstName}, ${this.lastName}`;
        this.age = age;
        this.gender = gender;
        this.interests = interests;

    }
    bio() {
        return `${this.name} is ${this.age} years old. They like ${this.interests}`;
    }

    greeting() {
        return `Hi! I'm ${this.name}`;
    }

}

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject) {
        super(firstName, lastName, age, gender, interests);
        this.subject = subject;
    }

    greeting() {
        return `Hello. My name is ${this.name.split(' ')[0][0]}.${this.name.split(' ')[1]}, and I teach ${this.subject}.`;
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, gender, interests) {
        super(firstName, lastName, age, gender, interests);
    }
    greeting() {
        return `Yo! I'm ${this.name,split(' ')[0]}.`;
    }
}