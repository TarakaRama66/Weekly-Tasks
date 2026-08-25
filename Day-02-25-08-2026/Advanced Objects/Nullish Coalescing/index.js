// it returns rsv only when the lsv is null or undefined
// Value1??Value2
// if value1 is null or undefined returns value2
// otherwise returns value1
// Example1
const age=undefined;
console.log(age??18);

// Example2
const age1 = 25;
console.log(age1??18);

// diff b/w || and ??
// using ||
const count =0;
console.log(count||10);
// because 0 is a falsy value

// using??
const count1=0;
console.log(count1??10); //0
//because 0 is neither null or undefined
