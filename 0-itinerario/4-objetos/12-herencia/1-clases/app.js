
class Person {

  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting = function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  }

  bio = function () {
    let string = `${this.name.first} ${this.name.last} is ${this.age} years old. `;
    let pronoun = 'They like ';
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      pronoun = 'He likes ';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      pronoun = 'She likes ';
    }
    string += pronoun;

    if (this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      for (let i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += 'and ' + this.interests[i] + '.';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }
    console.log(string);
  }

  farewell = function () {
    console.log(this.name.first + ' has left the building. Bye for now!');
  }

}

let person = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
person.greeting();
person.bio();
person.farewell();
console.log(typeof person);
console.log(person instanceof Person);

class Teacher extends Person {

  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this.subject = subject;
  }

  greeting = function () {
    let prefix = 'Mx.';
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    }
    console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
  }

}

let teacher = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
teacher.greeting();
teacher.bio();
teacher.farewell();
console.log(typeof teacher);
console.log(teacher instanceof Person);
console.log(teacher instanceof Teacher);

class Student extends Person {

  constructor(first, last, age, gender, interests) {
    super(first, last, age, gender, interests);
  }

  greeting = function () {
    console.log(`Yo! I'm ${this.name.first}.`);
  }

}

let student = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);
student.greeting();
student.bio();
student.farewell();
console.log(typeof student);
console.log(student instanceof Person);
console.log(student instanceof Student);
console.log(student.prototype);
console.log(Student.prototype);
for(let property in Student.prototype.keys){
  console.log(property);
}
for(let property in student.keys){
  console.log(property);
}
