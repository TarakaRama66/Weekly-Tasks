export default function
Grade(marks){
    if (marks >= 90) return "A Grade";
    if (marks >= 75) return "B Grade";
    if (marks >= 60) return "C Grade";
    if (marks >= 35) return "D Grade";
    return "Fail";
}