let developers = ["Tarak", "Ram"];
let testers = ["Tilak", "Gupta"];

// Using concat()
let projectTeam1 = developers.concat(testers);

console.log("Project Team using concat:");
console.log(projectTeam1);

// Using spread operator
let projectTeam2 = [...developers, ...testers];

console.log("\nProject Team using spread:");
console.log(projectTeam2);