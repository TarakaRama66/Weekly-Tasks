function runExamples() {
    const output = document.getElementById("output");
    output.textContent = "";

    function print(title, value) {
        output.textContent += `${title}: ${value}\n`;
    }

    // 1. Optional chaining with objects
    print("1. OPTIONAL CHAINING", "");

    const employee = {
        name: "Rahul",
        department: {
            name: "Development",
            manager: {
                name: "Priya"
            }
        }
    };

    print("Employee name", employee.name);
    print("Department", employee.department?.name);
    print("Manager name", employee.department?.manager?.name);
    print("Missing property", employee.address?.city);

    // 2. Avoiding errors with null
    print("\n2. SAFE PROPERTY ACCESS", "");

    const user = null;

    print("User city", user?.address?.city);
    print("User name", user?.name);

    // 3. Optional chaining with arrays
    print("\n3. OPTIONAL CHAINING WITH ARRAYS", "");

    const students = [
        { name: "Arun", marks: 85 },
        { name: "Sneha", marks: 92 }
    ];

    print("First student", students[0]?.name);
    print("Second student's marks", students[1]?.marks);
    print("Missing student", students[5]?.name);

    // 4. Optional function calls
    print("\n4. OPTIONAL FUNCTION CALL", "");

    const account = {
        name: "Kiran",
        greet() {
            return "Welcome, " + this.name;
        }
    };

    print("Greeting", account.greet?.());
    print("Missing method", account.logout?.());

    // 5. Nullish coalescing
    print("\n5. NULLISH COALESCING", "");

    const username = null;
    const displayName = username ?? "Guest";

    print("Display name", displayName);

    const age = undefined;
    print("Default age", age ?? 18);

    // 6. Zero and empty string
    print("\n6. ZERO AND EMPTY STRING", "");

    const points = 0;
    const nickname = "";

    print("Points", points ?? 100);
    print("Nickname", nickname ?? "Anonymous");

    // 7. Difference between || and ??
    print("\n7. LOGICAL OR VS NULLISH", "");

    print("0 || 100", 0 || 100);
    print("0 ?? 100", 0 ?? 100);

    print('"" || "Default"', "" || "Default");
    print('"" ?? "Default"', "" ?? "Default");

    // 8. Practical employee profile
    print("\n8. EMPLOYEE PROFILE", "");

    const profile = {
        name: "Suresh",
        role: "Developer",
        contact: null,
        address: {
            city: "Hyderabad"
        }
    };

    print("Name", profile.name ?? "Unknown");
    print("Role", profile.role ?? "Not assigned");
    print("Contact", profile.contact ?? "Not provided");
    print("City", profile.address?.city ?? "City unavailable");
    print("Manager", profile.manager?.name ?? "No manager assigned");

    // 9. Configuration defaults
    print("\n9. APPLICATION SETTINGS", "");

    const settings = {
        theme: "dark",
        language: "",
        pageSize: 0
    };

    print("Theme", settings.theme ?? "light");
    print("Language", settings.language ?? "English");
    print("Page size", settings.pageSize ?? 10);
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}
