// Parent Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
// Child Class Inheritance
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call Parent Constructor
    this.course = course;
  }
  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}
// Another Child Class
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log(`${this.name} teaches ${this.subject}.`);
  }
}
// Object Relationship Class
class Classroom {
  constructor(roomName, teacher, students) {
    this.roomName = roomName;
    this.teacher = teacher;
    this.students = students;
  }
  showClassInfo() {
    console.log(`\nClassroom: ${this.roomName}`);
    console.log(`Teacher: ${this.teacher.name}`);
    console.log("Students:");
    this.students.forEach(student => {
      console.log(`- ${student.name} (${student.course})`);
    });
  }
}
// Creating Objects
const teacher1 = new Teacher("TarakRam",35,"JavaScript");
const student1 = new Student("Gupta",23,"React");
const student2 = new Student("Tilak",22,"Node.js");
// Creating Relationship
const classA = new Classroom(
  "Frontend Batch",
  teacher1,
  [student1, student2]
);
// Using Methods
teacher1.introduce();
teacher1.teach();
student1.introduce();
student1.study();
classA.showClassInfo();