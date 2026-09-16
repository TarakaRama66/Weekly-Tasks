//task1
console.log("\n1.Solve array manipulation problems using different array methods");
const members = ["Tarak","Ram","Tilak","TarakGupta"];
const upperNames = members.map(member=>member.toUpperCase());
const longNames = members.filter(member=>member.length>5);
const totalLetters = members.reduce((sum, member)=>sum+member.length,0);
console.log(upperNames);
console.log(longNames);
console.log(totalLetters);

// task2
console.log("\n2.Sorting with built in method");
const fees = [4000,2500,5000,1500];
fees.sort((a,b)=>a-b);
console.log(fees);

console.log("\nSorting without built in method(bubble sort)");
const fees1 = [4000,2500,5000,1500];
for (let i=0;i<fees1.length;i++){
    for(let j=0;j<fees1.length-i-1;j++){
        if(fees1[j]>fees1[j+1]){
            let temp = fees1[j];
            fees1[j]=fees1[j+1];
            fees[j+1]=temp;
        }
    }
}
console.log(fees1);
// task3
console.log("\n3.Remove duplicate values from an array");
const trainers=["Siddu","Tarak","Priya","Soumya","Siddu","Tarak"];
const uniqueTrainers=[...new Set(trainers)];
console.log(uniqueTrainers);
// task4
console.log("\n4.Find highest and lowest values from an array");
const attendance = [12,15,24,66,72];
const highest = Math.max(...attendance);
const lowest = Math.min(...attendance);
console.log("Highest Number:",highest);
console.log("Lowest Number:",lowest);

// task5
console.log("\n5.Group and filter objects based on conditions");
const Gymmembers = [
    {name:"Tarak",type:"Premium"},{name:"Ram",type:"VIP"},{name:"Tilak",type:"Basic"},{name:"Gupta",type:"Premium"}
];
const premiumMembers = Gymmembers.filter(member=>member.type==="Premium");
console.log("Premium Members:",premiumMembers);

// task6
console.log("\n6.Manipulate nested objects");
const person = {name:"TarakGupta",
    workout:{
        trainer:"Siddu",
        plan:"Weight Gain"
    }
};
person.workout.plan = "Muscle Gain";
person.workout.duration = "2 hours";
console.log(person);

// task7
console.log("\n7.Practice Object Destructuring");
const person1 = {name:"Tilak",fee:2500,trainer:"Siddu",attendance:20};
const {name,fee,trainer}=person1;
console.log(name);
console.log(fee);
console.log(trainer);

// task8
console.log("\n8.Create shallow and deep copies of objects");
console.log("\nShallow copy");
const person2 = {name:"TarakGupta",
    workout:{
        trainer:"Siddu",
    }
};
const shallowCopy = {...person2};
shallowCopy.workout.trainer="SidduRoy"
console.log(person2);
console.log(shallowCopy);

console.log("\nDeep copy");
const deepCopy = JSON.parse(JSON.stringify(person2));
deepCopy.workout.trainer="SidduRoy"
console.log(person2);
console.log(deepCopy);

// task9
console.log("\n9.Convert objects into arrays and arrays into objects where appropriate");
console.log("\nobject to array");
const gym = {
  name: "SS Fitness",
  city: "Palakollu",
  members: 120
};
const arrayData = Object.entries(gym);
console.log(arrayData);
console.log("\narray to object");
const gymData = [
  ["name", "SS Fitness Pro"],
  ["city", "Hyderabad"],
  ["members", 120]
];
const gymObject = Object.fromEntries(gymData);
console.log(gymObject);

// task10
console.log("\n10.Combine multiple array and object methods to solve real-world problems");
const persons = [
  {
    name: "Ajay",
    fee: 3000,
    attendance: 20
  },
  {
    name: "Bhadri",
    fee: 3500,
    attendance: 23
  },
  {
    name: "Harsha",
    fee: 2500,
    attendance: 19
  },
  {
    name: "Shiva",
    fee: 4000,
    attendance: 30
  }
];
const report = persons
  .filter(member => member.attendance >= 20)
  .map(member => ({
    Name: member.name,
    Fee: member.fee
  }))
  .sort((a, b) => b.Fee - a.Fee);
const totalFee = members.reduce((sum, member) => sum + member.fee,0);
console.log(report);
console.log("Total Fee:", totalFee);


