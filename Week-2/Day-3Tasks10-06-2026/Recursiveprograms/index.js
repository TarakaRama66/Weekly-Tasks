// Factorial Example
console.log("\nFactorial Recursive Function")
function factorialRecursive(n){
if (n ===0  || n ===1){   //basecase&stop recursion
    return 1;
}
return n*factorialRecursive(n-1);
}
console.log(factorialRecursive(8));

console.log("\niterative Solution")
function factorialIterative(n){
    let result = 1;
    for (let i=1; i<=n; i++){
        result *=i;
    }
    return result;
}
console.log(factorialIterative(8))

console.log("\nSum of Numbers Recursive Function")
function sumRecursive(n){
    if (n ===1){
        return 1;
    }
    return n + sumRecursive(n-1)
}
console.log(sumRecursive(8))

console.log("\niterative Solution")
function sumIterative(n){
    let sum = 0;
    for(let i =1; i <=n; i++){
        sum +=i
    }
    return sum;
}
console.log(sumIterative(8))
