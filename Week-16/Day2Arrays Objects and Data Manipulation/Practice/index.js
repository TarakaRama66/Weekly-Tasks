const output = document.getElementById("output");
function display(title, data) {
    output.innerHTML += `
        <h3>${title}</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
        <hr>
    `;
}
// 1. Find Even Numbers
const numbers = [10, 15, 20, 25, 30, 35, 40];
const evenNumbers = numbers.filter(num => num % 2 === 0);
display("1. Even Numbers", evenNumbers);

// 2. Remove Duplicates
const duplicateNumbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
const uniqueNumbers = [...new Set(duplicateNumbers)];
display("2. Remove Duplicates", uniqueNumbers);

// 3. Highest & Lowest Values
const marks = [65, 90, 45, 78, 99, 25];
display("3. Highest Value", Math.max(...marks));
display("3. Lowest Value", Math.min(...marks));

// 4. Sort Array
const fees = [5000, 2000, 7000, 3000, 1000];
const sortedFees = [...fees].sort((a, b) => a - b);
display("4. Sorted Fees", sortedFees);

// 5. Bubble Sort
const bubbleArray = [45, 10, 90, 20, 5];
 
for (let i = 0; i < bubbleArray.length; i++) {
    for (let j = 0; j < bubbleArray.length - i - 1; j++) {
        if (bubbleArray[j] > bubbleArray[j + 1]) {
            let temp = bubbleArray[j];
            bubbleArray[j] = bubbleArray[j + 1];
            bubbleArray[j + 1] = temp;
        }
    }
}
 
display("5. Bubble Sort", bubbleArray);
 
// 6. Total Salary
const employees = [
    { name: "Tarak", salary: 30000 },
    { name: "Ram", salary: 40000 },
    { name: "Tilak", salary: 35000 }
];
 
const totalSalary =
employees.reduce((sum, emp) => sum + emp.salary, 0);
 
display("6. Total Salary", totalSalary);
 
// 7. Find Employee
const foundEmployee =
employees.find(emp => emp.name === "Tilak");
 
display("7. Find Employee", foundEmployee);
 
// 8. Topper
const students = [
    { name: "Tarak", marks: 85 },
    { name: "Ram", marks: 95 },
    { name: "Tilak", marks: 88 }
];
 
const topper = students.reduce((top, student) =>
student.marks > top.marks ? student : top);
display("8. Topper", topper);
 
// 9. Group Employees
const staff = [
    { name: "Tarak", dept: "IT" },
    { name: "Ram", dept: "HR" },
    { name: "Tilak", dept: "IT" },
    { name: "Gupta", dept: "Testing" }
];
 
const grouped = {};
staff.forEach(emp => {
    if (!grouped[emp.dept]) {
        grouped[emp.dept] = [];
    }
    grouped[emp.dept].push(emp.name);
});
display("9. Group Employees", grouped);

// 10. Count Occurrences
const fruits = [
    "Apple",
    "Banana",
    "Apple",
    "Orange",
    "Banana",
    "Apple"
]; 
const fruitCount = {};
fruits.forEach(fruit => {
    fruitCount[fruit] =
    (fruitCount[fruit] || 0) + 1;
});
display("10. Fruit Count", fruitCount);
 
// 11. Object Destructuring
const member = {
    name: "Tarak",
    age: 24,
    city: "Hyderabad"
};
const { name, age, city } = member;
display("11. Destructuring", {
    name,
    age,
    city
});
// 12. Nested Object Manipulation
const gymMember = {
    name: "Tarak",
    workout: {
        trainer: "Siddu",
        duration: "1 Hour"
    }
};
gymMember.workout.duration = "2 Hours";
display("12. Updated Gym Member", gymMember);
 
// 13. Object To Array
const gym = {
    gymName: "SS Fitness",
    city: "Palakollu",
    members: 150
};
display("13. Object To Array",
    Object.entries(gym)
);
// 14. Array To Object
const arrayData = [
    ["name", "SS Fitness"],
    ["city", "Palakollu"],
    ["members", 150]
];
display(
    "14. Array To Object",
    Object.fromEntries(arrayData)
);
// 15. Shallow Copy
const user1 = {
    name: "Tarak",
    address: {
        city: "Hyderabad"
    }
};
const shallowCopy = { ...user1 };
display("15. Shallow Copy", shallowCopy);

// 16. Deep Copy
const deepCopy = JSON.parse(JSON.stringify(user1));
deepCopy.address.city = "Vizag";

display("16. Original Object", user1);
display("16. Deep Copy Object", deepCopy);
 
// 17. Missing Number
const missingArray = [1, 2, 3, 5]; 
const n = 5;
const expectedSum = (n * (n + 1)) / 2;
const actualSum = missingArray.reduce((sum, num) => sum + num,0);
display("17. Missing Number",
    expectedSum - actualSum
);
// 18. Gym Report
const members = [
    {
        name: "Tarak",
        fee: 4000,
        attendance: 25,
        membership: "Premium"
    },
    {
        name: "Ram",
        fee: 6000,
        attendance: 30,
        membership: "VIP"
    },
    {
        name: "Tilak",
        fee: 3000,
        attendance: 15,
        membership: "Basic"
    },
    {
        name: "Gupta",
        fee: 5000,
        attendance: 28,
        membership: "Premium"
    }
];
const report = {totalMembers: members.length,
    totalFee:
    members.reduce(
    (sum, member) => sum + member.fee,0),
    activeMembers:
    members.filter(
    member => member.attendance >= 20
    ).length,
    premiumMembers:
    members.filter(
    member => member.membership === "Premium"
    ).length,
    memberNames:
    members.map(member => member.name)
};
display("18.Gym Report", report); 
// 19. Find Index
const index = members.findIndex(
member => member.name === "Gupta");
 
display("19. Sneha Index", index);

// 20. Some & Every
display("20. Any Low Attendance",
    members.some(
    member => member.attendance < 20)
);
display("20. All Paid Members",
    members.every(
    member => member.fee > 0)
);