// CODE here for your Lambda Classes

// Person

class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.location = attributes.location,
            this.age = attributes.age
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}


// Instructor

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
            this.favLanguage = attributes.catchPhrase,
            this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`
    }
}


// Student

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
            this.className = attributes.className,
            this.favSubjects = attributes.favSubjects
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}


// Project Manager

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName,
            this.favInstructor = attributes.favInstructor,
            this.age = attributes.age
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(subject, student) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}


const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
});

const calvin = new Person({
    name: 'Calvin',
    location: 'Washinton',
    age: 45,
});

const bentley = new Person({
    name: 'Bentley',
    location: 'Oregon',
    age: 12,
});

const brit = new Instructor({
    name: 'Brit',
    location: 'Niagara',
    age: 31,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Don\'t forget the homies'
});

const colin = new Instructor({
    name: 'Colin',
    location: 'Nigeria',
    age: 41,
    favLanguage: 'perl',
    specialty: 'DS',
    catchPhrase: 'You got it, dude.'
});

const bruce = new Instructor({
    name: 'Bruce',
    location: 'Australia',
    age: 18,
    favLanguage: 'HTML',
    specialty: 'UI',
    catchPhrase: 'The way to get started is to quit talking and begin doing.'
});

const andrew = new Student({
    name: 'Andrew',
    location: 'New Zealand',
    age: 26,
    previousBackground: 'Construction',
    className: 'Web25',
    favSubjects: 'Javascript'
});

const zac = new Student({
    name: 'Zac',
    location: 'Phillipines',
    age: 84,
    previousBackground: 'Chef',
    className: 'Web22',
    favSubjects: 'Java'
});

const yoko = new Student({
    name: 'Yoko',
    location: 'Japan',
    age: 20,
    previousBackground: 'Admin',
    className: 'Web27',
    favSubjects: 'React'
});

const adam = new ProjectManager({
    name: 'Adam',
    location: 'China',
    age: 15,
    favLanguage: 'Ruby',
    specialty: 'DS',
    catchPhrase: 'If life were predictable it would cease to be life, and be without flavor.',
    gradClassName: 'Cs23',
    favInstructor: 'Colin'
});

const abraham = new ProjectManager({
    name: 'Abraham',
    location: 'Taiwan',
    age: 37,
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: 'Life is what happens when you\'re busy making other plans.',
    gradClassName: 'Cs50',
    favInstructor: 'Brit'
});

const theodore = new ProjectManager({
    name: 'Theodore',
    location: 'South Dakota',
    age: 101,
    favLanguage: 'Python',
    specialty: 'UX',
    catchPhrase: 'When you reach the end of your rope, tie a knot in it and hang on.',
    gradClassName: 'Cs3',
    favInstructor: 'Bruce'
});

console.log(fred.location);
console.log(calvin.age);
console.log(bentley.speak());
console.log(brit.demo("Data Science"));
console.log(colin.grade("Bentley", "HTML"));
console.log(bruce.catchPhrase);
console.log(andrew.favSubjects);
console.log(zac.PRAssignment("CS"));
console.log(yoko.sprintChallenge("CSS"));
console.log(adam.standUp("Web25"));
console.log(abraham.debugsCode("Javascript"));
console.log(theodore.favInstructor);