function showResults() {

    // 1. var -> const
    const name = "Tarak";

    // 2. Traditional function -> Arrow function
    const greet = (name) => `Hello, ${name}!`;

    // 3. String concatenation -> Template literals
    const course = "JavaScript";
    const message = `Welcome to ${course} training.`;

    // 4. Object properties -> Destructuring
    const student = {
        studentName: "Hari",
        age: 22,
        marks: 90
    };

    const { studentName, age, marks } = student;

    // 5. Copying and combining arrays -> Spread operator
    const numbers1 = [10, 20, 30];
    const numbers2 = [40, 50, 60];

    const combinedNumbers = [...numbers1, ...numbers2];

    // 6. Default parameters
    const calculateTotal = (a, b = 10) => a + b;

    // 7. map() -> Transform array values
    const doubledNumbers = combinedNumbers.map(num => num * 2);

    // Display output in UI
    document.getElementById("output").innerHTML = `
        <h3>1. Arrow Function</h3>
        <p>${greet(name)}</p>

        <h3>2. Template Literals</h3>
        <p>${message}</p>

        <h3>3. Object Destructuring</h3>
        <p>Name: ${studentName}</p>
        <p>Age: ${age}</p>
        <p>Marks: ${marks}</p>

        <h3>4. Spread Operator</h3>
        <p>${combinedNumbers.join(", ")}</p>

        <h3>5. Default Parameters</h3>
        <p>calculateTotal(20): ${calculateTotal(20)}</p>
        <p>calculateTotal(20, 30): ${calculateTotal(20, 30)}</p>

        <h3>6. map() Method</h3>
        <p>${doubledNumbers.join(", ")}</p>
    `;
}
