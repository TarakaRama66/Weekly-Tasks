let text = "JavaScript Training";

console.log("Original String:", text);

// Length
console.log("Length:", text.length);

// Convert to Uppercase
console.log("Uppercase:", text.toUpperCase());

// Convert to Lowercase
console.log("Lowercase:", text.toLowerCase());

// Get Character at Index
console.log("Character at Index 4:", text.charAt(4));

// Find Index of Character
console.log("Index of 'S':", text.indexOf("S"));

// Check if String Includes a Word
console.log("Includes 'Training':", text.includes("Training"));

// Starts With
console.log("Starts With 'Java':", text.startsWith("Java"));

// Ends With
console.log("Ends With 'ing':", text.endsWith("ing"));

// Extract Part of String
console.log("Slice (0,10):", text.slice(0, 10));

// Replace Word
console.log("Replace:", text.replace("Training", "Course"));

// Split String into Array
console.log("Split:", text.split(" "));

// Remove Spaces
let name = "   Gupta   ";
console.log("Trim:", name.trim());

// Repeat String
console.log("Repeat:", "Hi ".repeat(3));

// Concatenate Strings
let firstName = "Gupta";
let lastName = "Kandula";
console.log("Full Name:", firstName.concat(" ", lastName));