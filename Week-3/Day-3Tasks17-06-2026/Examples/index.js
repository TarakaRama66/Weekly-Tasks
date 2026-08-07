// Workout 
let workout = {
    exercise: "Push Ups",
    sets: 3,
    reps: 15
};

let totalReps = workout.sets * workout.reps;

let summary = `
Workout Date: ${new Date().toDateString()}
Exercise: ${workout.exercise.toUpperCase()}
Total Repetitions: ${Math.round(totalReps)}
`;

console.log(summary);

for (let key in workout) {
    console.log(`${key}: ${workout[key]}`);
}

// Mobile datausage
let dataUsage = {
    monday: 1.5,
    tuesday: 2.3,
    wednesday: 1.8
};

let total = 0;

for (let day in dataUsage) {
    total += dataUsage[day];
}

let report = `
Date: ${new Date().toLocaleDateString()}
Total Data Used: ${Math.ceil(total)} GB
`;

console.log(report);

//Water Intake
let water = {
    morning: 1.5,
    afternoon: 1.5,
    evening: 2
};

let totalLiters = 0;

for (let time in water) {
    totalLiters += water[time];
}

let result = `
Date: ${new Date().toDateString()}
Total Water Intake: ${Math.abs(totalLiters)} Liters
Status: ${"healthy".toUpperCase()}
`;

console.log(result);