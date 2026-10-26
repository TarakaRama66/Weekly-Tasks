function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Even or Odd
    print("1. EVEN OR ODD", "");

    const number = 17;
    print("Number", number);
    print("Result", number % 2 === 0 ? "Even" : "Odd");

    // 2. Positive, Negative, or Zero
    print("\n2. NUMBER CHECK", "");

    const value = -8;

    if (value > 0) {
        print("Result", "Positive");
    } else if (value < 0) {
        print("Result", "Negative");
    } else {
        print("Result", "Zero");
    }

    // 3. Largest of Three Numbers
    print("\n3. LARGEST NUMBER", "");

    const a = 25;
    const b = 70;
    const c = 45;

    const largest = Math.max(a, b, c);

    print("Numbers", `${a}, ${b}, ${c}`);
    print("Largest", largest);

    // 4. Factorial
    print("\n4. FACTORIAL", "");

    const n = 5;
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    print(`${n}!`, factorial);

    // 5. Prime Number
    print("\n5. PRIME NUMBER", "");

    const primeNumber = 29;
    let isPrime = primeNumber >= 2;

    for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    print("Number", primeNumber);
    print("Result", isPrime ? "Prime" : "Not prime");

    // 6. Reverse a String
    print("\n6. REVERSE STRING", "");

    const text = "JavaScript";
    const reversed = text.split("").reverse().join("");

    print("Original", text);
    print("Reversed", reversed);

    // 7. Palindrome
    print("\n7. PALINDROME", "");

    const word = "madam";
    const isPalindrome =
        word === word.split("").reverse().join("");

    print("Word", word);
    print("Result", isPalindrome ? "Palindrome" : "Not palindrome");

    // 8. Fibonacci Series
    print("\n8. FIBONACCI SERIES", "");

    let first = 0;
    let second = 1;
    const fibonacci = [];

    for (let i = 0; i < 10; i++) {
        fibonacci.push(first);

        const next = first + second;
        first = second;
        second = next;
    }

    print("First 10 terms", fibonacci.join(", "));

    // 9. Sum of Digits
    print("\n9. SUM OF DIGITS", "");

    const digits = 12345;
    let temp = digits;
    let digitSum = 0;

    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    print("Number", digits);
    print("Sum", digitSum);

    // 10. Find Even Numbers in an Array
    print("\n10. EVEN NUMBERS IN ARRAY", "");

    const numbers = [12, 7, 18, 5, 20, 9];
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    print("Original array", numbers.join(", "));
    print("Even numbers", evenNumbers.join(", "));

    // 11. Count Vowels
    print("\n11. COUNT VOWELS", "");

    const sentence = "Hello JavaScript";
    const vowels = sentence.match(/[aeiou]/gi) || [];

    print("Sentence", sentence);
    print("Vowel count", vowels.length);

    // 12. Sum of Array Elements
    print("\n12. ARRAY SUM", "");

    const scores = [10, 20, 30, 40, 50];
    const total = scores.reduce((sum, score) => sum + score, 0);

    print("Scores", scores.join(", "));
    print("Total", total);
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
