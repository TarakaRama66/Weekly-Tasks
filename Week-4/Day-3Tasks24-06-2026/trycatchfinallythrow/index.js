function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("Age is must be 18 or above");
    }

    console.log("Access Granted");
  }
  catch (error) {
    console.log("Error:", error.message);
  }
  finally {
    console.log("Age verification Success");
  }
}

checkAge(16);
checkAge(20);
checkAge(18);
checkAge(35);