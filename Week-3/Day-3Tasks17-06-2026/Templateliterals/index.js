// Dynamic Data
let name = "Gupta";
let age = 23;

let employee = {
    id: 101,
    department: "IT"
};

let product = "Laptop";
let price = 50000;

// Template Literal
let message = `
User Information
Name: ${name}
Age: ${age}

Employee Details
ID: ${employee.id}
Department: ${employee.department}

Product Details
Product: ${product}
Price: ₹${price}

Calculation
Price with GST (18%): ₹${price + (price * 18 / 100)}

Greeting
Hello ${name}, Welcome to JavaScript!
`;

console.log(message);