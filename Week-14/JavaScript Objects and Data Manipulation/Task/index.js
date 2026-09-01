const student = {
  id: 101,
  name: "Gupta",
  course: {
    title: "JavaScript",duration: "3 Months",trainer: {name: "Tarak",experience: "5 Years"}
  },
  marks: {
    html: 90,
    css: 85,
    javascript: 95
  },
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};
// Object Destructuring
const {
  name,
  course: {
    title,
    trainer: { name: trainerName }
  },
  marks,
  ...remainingDetails
} = student;

console.log("Student Name:", name);
console.log("Course:", title);
console.log("Trainer:", trainerName);

// Object.keys()

console.log("\nObject Keys:");
console.log(Object.keys(student));

// Object.values()

console.log("\nObject Values:");
console.log(Object.values(student));

// Object.entries()

console.log("\nObject Entries:");

for (const [key, value] of Object.entries(student)) {
  console.log(key, value);
}

// Optional Chaining

console.log("\nOptional Chaining:");

console.log(student.address?.city);
console.log(student.course?.trainer?.experience);

console.log(student.office?.location?.city);
// undefined (No Error)

// Nullish Coalescing

console.log("\nNullish Coalescing:");
console.log(student.phone ?? "Phone Number Not Available");
console.log(student.email ?? "Email Not Available");

//update data
student.marks.javascript = 100;
student.address.city = "Bangalore";
console.log("\nUpdated Student:");
console.log(student);

//add new property
student.address.country = "India";
console.log("\nAfter Adding Country:");
console.log(student);

//spread operator
const updatedStudent = {
  ...student,
  batch: "Batch-25"
};
console.log("\nSpread Operator:");
console.log(updatedStudent);
//rest operator

const {
  id,
  name: studentName,
  ...otherInfo
} = updatedStudent;

console.log("\nRest Operator:");
console.log(id);
console.log(studentName);
console.log(otherInfo);

//calculate total marks
const totalMarks =
  student.marks.html + student.marks.css + student.marks.javascript;
console.log("\nTotal Marks:", totalMarks);