const zumbaMembers = [
  {
    id: 1,
    name: "Ananya",
    age: 24,
    attendance: 20,
    membership: "Premium"
  },
  {
    id: 2,
    name: "Rahul",
    age: 28,
    attendance: 12,
    membership: "Basic"
  },
  {
    id: 3,
    name: "Sneha",
    age: 22,
    attendance: 25,
    membership: "Premium"
  },
  {
    id: 4,
    name: "Kiran",
    age: 30,
    attendance: 8,
    membership: "Basic"
  }
];
// Get all member names
const memberNames = zumbaMembers.map(member => member.name);
console.log("Member Names:", memberNames);
//Members with attendance above 15
const activeMembers = zumbaMembers.filter(
  member => member.attendance > 15
);
console.log("Active Members:", activeMembers);
//Find a specific member
const member = zumbaMembers.find(
  member => member.name === "Sneha"
);
console.log("Found Member:", member);
//Find index of Rahul
const memberIndex = zumbaMembers.findIndex(
  member => member.name === "Rahul"
);
console.log("Rahul Index:", memberIndex);
//Total attendance of all members
const totalAttendance = zumbaMembers.reduce(
  (total, member) => total + member.attendance,
  0
);
console.log("Total Attendance:", totalAttendance);
//Check if any member attendance is below 10
const lowAttendance = zumbaMembers.some(
  member => member.attendance < 10
);
console.log("Any Low Attendance:", lowAttendance);
//Check if all members are adults
const allAdults = zumbaMembers.every(
  member => member.age >= 18
);
console.log("All Adults:", allAdults);
//Display each member
zumbaMembers.forEach(member => {
  console.log(
    `${member.name} attended ${member.attendance} classes`
  );
});
//Sort members by attendance
const sortedMembers = [...zumbaMembers].sort(
  (a, b) => b.attendance - a.attendance
);
console.log("Sorted Members:", sortedMembers);
//Join member names
const namesString = memberNames.join(", ");
console.log(namesString);
//object manipulation
const instructor = {
  name: "Megha",
  experience: 5,
  schedule: {
    morning: "7 AM",
    evening: "6 PM"
  }
};
//Accessing property
console.log(instructor.name);
 
//update property
instructor.experience = 6;
 
//add property
instructor.city = "Hyderabad";
 
console.log(instructor);
 
// Nested object access
console.log(instructor.schedule.evening);
 
// Object Methods
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor));
//destructuring
const { name, experience } = instructor;
 
console.log(name);
console.log(experience);
 
//array destructuring
const [firstMember, secondMember] = memberNames;
 
console.log(firstMember);
console.log(secondMember);
//spread operator
const newMember = {
  id: 5,
  name: "Priya",
  age: 26,
  attendance: 18,
  membership: "Premium"
};
 
const updatedMembers = [
  ...zumbaMembers,
  newMember
];
 
console.log(updatedMembers);
//rest operator
function calculateClasses(...classes) {
  return classes.reduce(
    (total, value) => total + value,
    0
  );
}
 
console.log(
  calculateClasses(5, 8, 10, 12)
);
//optional chaining
console.log(
  instructor.contact?.phone
);
 
//nullish coalescing
 
const classTheme = null;
 
console.log(
  classTheme ?? "Bollywood Zumba"
);
//flatten array
const weeklySessions = [
  ["Monday", "Tuesday"],
  ["Wednesday", "Thursday"],
  ["Friday"]
];
 
console.log(
  weeklySessions.flat()
);
//remove duplicates
const songs = [
  "Desi Girl",
  "Kala Chashma",
  "Desi Girl",
  "Malang",
  "Kala Chashma"
];
 
const uniqueSongs = [...new Set(songs)];
console.log(uniqueSongs);