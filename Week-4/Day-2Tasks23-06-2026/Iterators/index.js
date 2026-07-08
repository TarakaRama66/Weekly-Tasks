// Custom Iterator
const numbers = [10, 20, 30];
function createIterator(arr) {
    let index = 0;
    return {
        next() {
            if (index < arr.length) {
                return {
                    value: arr[index++],
                    done: false
                };
            }
            return {
                value: undefined,
                done: true
            };
        }
    };
}
const iterator = createIterator(numbers);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Student Iterator
const students = ["Gupta", "Tarak", "Ram", ];

function studentIterator(data) {
    let count = 0;

    return {
        next() {
            return count < data.length
                ? { value: data[count++], done: false }
                : { value: undefined, done: true };
        }
    };
}

const student = studentIterator(students);

console.log(student.next());
console.log(student.next());
console.log(student.next());
console.log(student.next());