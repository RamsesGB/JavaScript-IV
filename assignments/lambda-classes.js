// CODE here for your Lambda Classes
class Person {
    constructor(obj1){
        this.name = obj1.name;
        this.age = obj1.age;
        this.location = obj1.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(obj2){
        super(obj2);
        this.specialty = obj2.specialty;
        this.favLanguage = obj2.favLanguage;
        this.catchPhrase = obj2.catchPhrase;
    }
    demo(subjectString){
        console.log(`Today we are learning about ${subjectString}`);
    }
    grade(studentObj, subjectString){
        console.log(`${student.name} receives a perfect score on ${subjectString}`);
    }
}