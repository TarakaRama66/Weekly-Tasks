
const output = document.getElementById("output");

// 1. Normal Iterator
function normalIterator() {

    let numbers = [10, 20, 30, 40];

    let iterator = numbers[Symbol.iterator]();

    let result = "";

    let value = iterator.next();

    while (!value.done) {
        result += `<p>${value.value}</p>`;
        value = iterator.next();
    }

    output.innerHTML = result;
}

// 2. Custom Iterator
function customIterator() {

    let numbers = [100, 200, 300];

    let index = 0;

    let iterator = {
        next: function() {

            if (index < numbers.length) {

                return {
                    value: numbers[index++],
                    done: false
                };

            } else {

                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };

    let result = "";

    let item = iterator.next();

    while (!item.done) {
        result += `<p>${item.value}</p>`;
        item = iterator.next();
    }

    output.innerHTML = result;
}

// 3. Employee Iterator
function employeeIterator() {

    let employees = [
        "Rahul",
        "Priya",
        "Kiran",
        "Sneha"
    ];

    let iterator = employees[Symbol.iterator]();

    let result = "";

    let item = iterator.next();

    while (!item.done) {
        result += `<p>Employee: ${item.value}</p>`;
        item = iterator.next();
    }

    output.innerHTML = result;
}