// Basic 2D Array
let marks = [
    [68,70,89],
    [56,46,96],
    [87,67,87]
]
console.log(marks)

// Accessing Elements
let marks1 = [
    [68,70,89],
    [56,46,96],
    [87,67,87]
]
console.log(marks1[0][1]);
console.log(marks1[1][2]);
console.log(marks1[2][0]);

//using Nested Loops
let numbers =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for (let i=0; i < numbers.length;i ++){
    for (let j = 0; j <numbers.length; j++){
        console.log(numbers[i][j])
    }
}

// 3D Array example
let Data = [
    [
        ["Tarak", "Developer"],
        ["Ram", "QA Automation"]
    ],
    [
        ["Tilak", "HR"],
        ["Gupta", "Tester"]
    ]
];
console.log(Data[0][1][1])