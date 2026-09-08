// Member Details
const member = {
  name: "Gupta",
  age: 22,
  weight: 70, // kg
  height: 1.75, // meters
  membership: "Premium"
};
 
// Conditional Statements
if (member.membership === "Premium") {
  console.log("Access to all gym facilities");
} else if (member.membership === "Basic") {
  console.log("Access to gym equipment only");
} else {
  console.log("Membership not active");
}
// Workout Plan
const workoutPlan = [
  "Push-Ups",
  "Bench Press",
  "Squats",
  "Deadlifts",
  "Plank"
];
 
console.log("\nToday's Workout:");
 
for (let exercise of workoutPlan) {
  console.log(exercise);
}
 
// Function Declaration
function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}
 
const bmi = calculateBMI(member.weight, member.height);
 
console.log(`\nBMI of ${member.name}: ${bmi}`);
 
// Ternary Operator
const fitnessStatus =
  bmi < 18.5
    ? "Underweight"
    : bmi < 25
    ? "Healthy"
    : bmi < 30
    ? "Overweight"
    : "Obese";
 
console.log("Fitness Status:", fitnessStatus);
 
// Arrow Function
const caloriesBurned = (minutes) => minutes * 8;
 
console.log(
  `Calories Burned in 60 mins: ${caloriesBurned(60)} kcal`
);
 
// Callback Function
function completeWorkout(callback) {
  console.log("\nWorkout Session Completed");
  callback();
}
 
completeWorkout(() => {
  console.log("Great Job! Keep Training Consistently");
});
