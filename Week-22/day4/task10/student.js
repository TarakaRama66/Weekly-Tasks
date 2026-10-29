let students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Pooja", marks: 92 }
];

// Named export: add a student
export function addStudent(name, marks) {
    const student = {
        id: Date.now(),
        name: name,
        marks: marks
    };

    students.push(student);
    return student;
}

// Named export: get all students
export function getStudents() {
    return [...students];
}

// Named export: calculate average marks
export function calculateAverage() {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    return total / students.length;
}

// Default export: find a student by ID
export default function findStudentById(id) {
    return students.find(student => student.id === id);
}
