//Basic
function* numbersGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbersGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//Employee generator
function* employees() {
    yield "Frontend Developer";
    yield "Backend Developer";
    yield "UI Designer";
}

const emp = employees();

console.log(emp.next().value);
console.log(emp.next().value);
console.log(emp.next().value);

//Product Generator
function* products() {
    yield "Laptop";
    yield "Mobile";
    yield "Headphones";
}

const product = products();

for (let item of product) {
    console.log(item);
}