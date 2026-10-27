function showDetails() {
    // Object
    const student = {
        name: "Pooja",
        age: 22,
        course: "JavaScript",
        city: "Hyderabad"
    };

    // Object destructuring
    const { name, age, course, city } = student;

    // Array
    const marks = [85, 90, 95, 80];

    // Array destructuring
    const [first, second, third, fourth] = marks;

    // Nested object destructuring
    const employee = {
        name: "Ravikiran",
        department: {
            title: "IT",
            location: "Hyderabad"
        }
    };

    const {
        department: { title, location }
    } = employee;

    document.getElementById("output").innerHTML = `
        <h3>Object Destructuring</h3>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <p>City: ${city}</p>

        <h3>Array Destructuring</h3>
        <p>First Mark: ${first}</p>
        <p>Second Mark: ${second}</p>
        <p>Third Mark: ${third}</p>
        <p>Fourth Mark: ${fourth}</p>

        <h3>Nested Object Destructuring</h3>
        <p>Department: ${title}</p>
        <p>Location: ${location}</p>
    `;
}
