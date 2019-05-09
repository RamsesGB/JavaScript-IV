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

class Student extends Person {
    constructor(obj3){
        super(obj3);
        this.previousBackground = obj3.previousBackground;
        this.className = obj3.className;
        this.favSubjects = obj3.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subjectString){
        console.log(`${this.name} has submitted a PR for ${subjectString}`);
    }
    sprintChallenge(subjectString){
        console.log(`${this.name} has begun sprint challenge on ${subjectString}`);
    }
}

class ProjectManager extends Instructor {
    constructor(obj4){
        super(obj4);
        this.gradClassName = obj4.gradClassName;
        this.favInstructor = obj4.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel stand up times!​​​​​`);
    }
    debugsCode(studentObj, subjectString){
        console.log(` ${studentObj} debugs ${this.name}'s code on ${subjectString}`)
    }
}

const danLevy = new Instructor({
    name: 'Dan Levy', 
    age: 35, 
    location: 'Denver',
    specialty: 'Cat jokes',
    favLanguage: 'Javascript',
    catchPhrase: 'Give me a thread in slack',
})

const ramses = new Student({
    name: 'Ramses', 
    age: 25, 
    location: 'Miami', 
    previousBackground: 'Real Estate', 
    className: 'Web20', 
    favSubjects: ['css', 'html', 'JS'],
});

const winnieSong = new Student({
    name: 'Winnie Song',
    location: 'Flushing',
    age: 22,
    previousBackground: `MUA`,
    className: `web20`,
    favSubjects: ['CSS', 'HTML', 'LESS']
});

const chris = new Student({
    name: 'Chris', 
    age: 23, 
    location: 'Los Angeles', 
    previousBackground: 'Sales', 
    className: 'Web20', 
    favSubjects: 'JavaScript Classes'
});



const joshua = new ProjectManager({
    name: 'Joshua',
    location: 'California',
    age: 'Thirties',
    favLanguage: 'Unity',
    specialty: 'Kick-ass PM',
    catchPhrase: 'brady bunch view',
    gradClassName: 'WEB17',
    favInstructor: 'Josh Knell',
});

ramses.speak();
ramses.listsSubjects();
//
winnieSong.speak();
winnieSong.listsSubjects();
//
chris.speak();
chris.listsSubjects();
//
danLevy.speak();
danLevy.grade(ramses, 'Javascript IV');
//
joshua.demo('Javascript IV');
joshua.standUp('Web_20 Sprint 3');
joshua.debugsCode(ramses, 'Prototypes');