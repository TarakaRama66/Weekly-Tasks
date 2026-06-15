//Without using Sort() Ascending Order
let numbers = [66, 72, 11, 24, 88];

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);

// Descending Order
let numbers1 = [66, 72, 11, 24, 88];

for (let i = 0; i < numbers1.length - 1; i++) {
    for (let j = 0; j < numbers1.length - 1 - i; j++) {
        if (numbers1[j] < numbers1[j + 1]) {
            let temp = numbers1[j];
            numbers1[j] = numbers1[j + 1];
            numbers1[j + 1] = temp;
        }
    }
}
console.log(numbers1);