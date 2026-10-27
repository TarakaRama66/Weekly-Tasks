function showResults() {
    const numbers = [10, 25, 5, 40, 15, 30];

    // 1. map() - Double every number
    const doubled = numbers.map(num => num * 2);

    // 2. filter() - Get numbers greater than 15
    const filtered = numbers.filter(num => num > 15);

    // 3. reduce() - Calculate the total
    const total = numbers.reduce((sum, num) => sum + num, 0);

    // 4. find() - Find the first number greater than 20
    const found = numbers.find(num => num > 20);

    // 5. sort() - Sort numbers in ascending order
    const sorted = [...numbers].sort((a, b) => a - b);

    document.getElementById("output").innerHTML = `
        <h3>Original Array</h3>
        <p>${numbers.join(", ")}</p>

        <h3>1. map() - Doubled Numbers</h3>
        <p>${doubled.join(", ")}</p>

        <h3>2. filter() - Numbers Greater Than 15</h3>
        <p>${filtered.join(", ")}</p>

        <h3>3. reduce() - Total</h3>
        <p>${total}</p>

        <h3>4. find() - First Number Greater Than 20</h3>
        <p>${found}</p>

        <h3>5. sort() - Ascending Order</h3>
        <p>${sorted.join(", ")}</p>
    `;
}
