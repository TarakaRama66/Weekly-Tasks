const student = {
  id: 1,
  name: "Gupta",
  course: "JavaScript",
  address: {
    city: "Palakollu",
    state: "Andhra Pradesh",
    pincode: 534260
  },
  marks: {
    html: 85,
    css: 85,
    javascript: 90
  }
};

console.log(student.name);
console.log(student.address.city);
console.log(student.marks.javascript);

// Update marks
student.marks.javascript = 95;

// Add property
student.address.country = "India";

console.log(student);