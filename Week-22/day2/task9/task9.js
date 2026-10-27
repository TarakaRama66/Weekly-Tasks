const utilities = {
    // 1. Check whether a number is even
    isEven: (num) => num % 2 === 0,

    // 2. Calculate the square
    square: (num) => num * num,

    // 3. Capitalize a string
    capitalize: (text) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),

    // 4. Find the maximum number
    getMax: (numbers) => Math.max(...numbers),

    // 5. Calculate the average
    getAverage: (numbers) => {
        if (numbers.length === 0) {
            return 0;
        }

        const total = numbers.reduce((sum, num) => sum + num, 0);
        return total / numbers.length;
    }
};

function showResults() {
    const numbers = [10, 20, 30, 40, 50];

    document.getElementById("output").innerHTML = `
        <h3>Even Number Check</h3>
        <p>Is 10 even? ${utilities.isEven(10)}</p>
        <p>Is 7 even? ${utilities.isEven(7)}</p>

        <h3>Square Calculation</h3>
        <p>Square of 5: ${utilities.square(5)}</p>

        <h3>Capitalize Text</h3>
        <p>${utilities.capitalize("jAVaSCrIPt")}</p>

        <h3>Maximum Number</h3>
        <p>${utilities.getMax(numbers)}</p>

        <h3>Average Calculation</h3>
        <p>${utilities.getAverage(numbers)}</p>
    `;
}
