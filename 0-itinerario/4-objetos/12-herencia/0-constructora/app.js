const { Console } = require("./console");

const console = new Console();

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.writeln(`Hi! I'm ${this.name.first}.`);
};

Person.prototype.bio = function() {
  let string = `${this.name.first} ${this.name.last} is ${this.age} years old. `;
  let pronoun = 'They like ';
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  }
  string += pronoun;

  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for(let i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  console.writeln(string);
};

Person.prototype.farewell = function() {
  console.writeln(this.name.first + ' has left the building. Bye for now!');
}

let person = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
person.greeting();
person.bio();
person.farewell();
console.writeln(typeof person);
console.writeln(person instanceof Person);

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  let prefix = 'Mx.';
  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  }
  console.writeln(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
};

let teacher = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
teacher.greeting();
teacher.bio();
teacher.farewell();
console.writeln(typeof teacher);
console.writeln(teacher instanceof Person);
console.writeln(teacher instanceof Teacher);

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
  console.writeln(`Yo! I'm ${this.name.first}.`);
};

let student = new Student('Liz', 'Sheppard', 17, 'female', ['ninjitsu', 'air cadets']);
student.greeting();
student.bio();
student.farewell();
console.writeln(typeof student);
console.writeln(student instanceof Person);
console.writeln(student instanceof Student);
